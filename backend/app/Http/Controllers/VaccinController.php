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
        $data['pays'] = $request['pays'];
        $data['nbr_dose'] = $request['nbr_dose'];
        vaccins::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);



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
        $data['pays'] = $request['pays'];
        $data['nbr_dose'] = $request['nbr_dose'];
        $data['fabricant'] = $request['fabricant'];

        vaccins::find($id)->update($data);
        return response()->json([
            'message' => 'vaccin updated successfully'
        ], 200);
    }
}
