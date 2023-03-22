<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Stock;

class StockController extends Controller
{


    public function getAll()
    {
        $data = Stock::get();
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {

        $data['nomvaccin'] = $request['nomvaccin'];
        $data['quantite'] = $request['quantite'];
        $data['lieu'] = $request['lieu'];
        $data['dateproduction'] = $request['dateproduction'];
        $data['dateexpiration'] = $request['dateexpiration'];
        $data['N_lot'] = $request['N_lot'];

        $regroupe_stock = Stock::select('quantite')->where([['nomvaccin','=',$data['nomvaccin']],['lieu','=',$data['lieu']]])->first();

        if($regroupe_stock != null){
            Stock::select('quantite')->where('nomvaccin','=',$data['nomvaccin'])->where('lieu','=',$data['lieu'])->increment('quantite',$data['quantite']);
        }
        else{
            Stock::create($data);
            return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
        }

    }

    public function get($id)
    {
        return Stock::find($id);
    }

    public function delete($id)
    {
        $res = Stock::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }


    public function update(Request $request, $id)
    {

        $data['nomvaccin'] = $request['nomvaccin'];
        $data['quantite'] = $request['quantite'];
        $data['lieu'] = $request['lieu'];
        $data['dateproduction'] = $request['dateproduction'];
        $data['dateexpiration'] = $request['dateexpiration'];
        Stock::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}
