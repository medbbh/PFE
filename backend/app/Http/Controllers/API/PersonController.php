<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Person;
use App\Models\Stock;
Use Log;

class PersonController extends Controller
{

    public function getAll(){
      $data = Person::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){

      $data['nni'] = $request['nni'];
      $data['name'] = $request['name'];
      $data['prenom'] = $request['prenom'];
      $data['age'] = $request['age'];
      $data['sex'] = $request['sex'];
      $data['nomvaccin'] = $request['nomvaccin'];
      $data['nbrdose'] = $request['nbrdose'];
      $data['terminervaccin'] = $request['terminervaccin'];
      $data['dateprochaine'] = $request['dateprochaine'];
      $data['dateactuel'] = $request['dateactuel'];
      $data['lieu'] = $request['lieu'];

      Person::create($data);


      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);

    }

    public function delete($id){
      $res = Person::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Person::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['nni'] = $request['nni'];
        $data['name'] = $request['name'];
        $data['prenom'] = $request['prenom'];
        $data['age'] = $request['age'];
        $data['sex'] = $request['sex'];
        $data['nomvaccin'] = $request['nomvaccin'];
        $data['nbrdose'] = $request['nbrdose'];
        $data['terminervaccin'] = $request['terminervaccin'];
        $data['dateprochaine'] = $request['dateprochaine'];
        $data['lieu'] = $request['lieu'];
      Person::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}

