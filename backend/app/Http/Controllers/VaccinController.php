<?php

namespace App\Http\Controllers;

use App\Models\vaccin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class VaccinController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return vaccin::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        vaccin::create($request ->all());
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return vaccin::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        if(vaccin::where('id' ,$id)->exists()){
            $vaccin = vaccin::find($id);
            $vaccin->nom = $request->nom;
            $vaccin->type = $request->type;
            $vaccin->date_fab = $request->date_fab;
            $vaccin->date_exp = $request->date_exp;
            $vaccin->fabricant = $request->fabricant;


            $vaccin->update($request);
            return response()->json([
                'message'=>'vaccin updated successfully'
            ],200);
        }else{
            return response()->json([
                'message'=>'Article not found'
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
    {
        if(vaccin::where('id' ,$id)->exists()){
            $vaccin = vaccin::find($id);
            $vaccin->delete();


            return response()->json([
                'message'=>'record deleted successfully'
            ],200);
        }else{
            return response()->json([
                'message'=>'vaccin not found'
            ],404);
        }
    }
}
