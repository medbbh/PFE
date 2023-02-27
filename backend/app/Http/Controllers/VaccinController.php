<?php

namespace App\Http\Controllers;

use App\Models\vaccins;
use Illuminate\Http\Request;

class VaccinController extends Controller
{

    public function getAll()
    {
        $data = vaccins::get();
        return response()->json($data, 200);
    }



    public function create(Request $request)
    {
        $data['nom'] = $request['nom'];
        $data['fabricant'] = $request['fabricant'];
        $data['date_fab'] = $request['date_fab'];
        $data['date_exp'] = $request['date_exp'];
        vaccins::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);


        // return Vaccins::create($request->all());


    }


    public function delete($id)
    {
        $res = vaccins::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }



    public function get($id)
    {
        $data = vaccins::find($id);
        return response()->json($data, 200);
    }



    public function update(Request $request, $id)
    {
        $data['nom'] = $request['nom'];
        $data['date_fab'] = $request['date_fab'];
        $data['date_exp'] = $request['date_exp'];
        $data['fabricant'] = $request['fabricant'];

        vaccins::find($id)->update($data);
        return response()->json([
            'message' => 'vaccin updated successfully'
        ], 200);
    }
}
