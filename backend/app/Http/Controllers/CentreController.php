<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Centre;

class CentreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Centre::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): Response
    {
        return Centre::create($request ->all());
    }

    /**
     * Display the specified resource.
     */
    public function show($id): Response
    {
        return Centre::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id): Response
    {
        if(Centre::where('id' ,$id)->exists()){
            $centre = Centre::find($id);
            $centre->nom = $request->nom;
            $centre->localisation = $request->localisation;
            $centre->type = $request->type;

            $centre->save();
            return response()->json([
                'message'=>'record updated successfully'
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
    public function destroy( $id): Response
    {
        if(Centre::where('id' ,$id)->exists()){
            $centre = Centre::find($id);
            $centre->delete();

           
            return response()->json([
                'message'=>'record deleted successfully'
            ],200);
        }else{
            return response()->json([
                'message'=>'centre not found'
            ],404);
        }
    }
}
