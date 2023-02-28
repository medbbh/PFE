<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
// use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{


    public function register(Request $request)
    {
        $user = User::where('email', $request['email'])->first();
        if ($user) {
            $response['status'] = 0;
            $response['message'] = 'Email already exist';
            $response['code'] = 409;
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);

            $response['status'] = 1;
            $response['message'] = 'user register successfully';
            $response['code'] = 200;
        }

        return response()->json($response);
    }


    public function login(Request $request){

        $credentials = $request->only('email','password');
        try{
             if(!JWTAuth::attempt($credentials)){
                $response['status'] =0;
                $response['code'] = 401;
                $response['data'] =null;
                $response['message'] = 'Email or password is incorrect';

                return response()->json($response);

             };
        } catch(JWTException $e){
            $response['data'] =null;
            $response['code'] = 500;
            $response['message'] = 'Could Not Create Token';
            return response()->json($response);

        }

        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' =>$user->id,
            'user_email' =>$user->email,
            'user_type' =>$user->userType
        ])->attempt($credentials);

        $response['data'] =$data;
        $response['status'] =1;
        $response['code'] = 200;
        $response['message'] = 'Login succesfuly';
        $response['userType'] = $response['userType'] = Auth::user()->userType;


        return response()->json($response);

    }


    public function get($id)
    {
        $data =  User::find($id);
        return response()->json($data, 200);


    }

    public function update(Request $request, $id)
    {
        if(User::where('id' ,$id)->exists()){
            $user = User::find($id);
            $user->name = $request->name;
            $user->email = $request->email;

            $user->save();
            return response()->json([
                'message'=>'record updated successfully'
            ],200);
        }else{
            return response()->json([
                'message'=>'Article not found'
            ],404);
        }
    }


    public function destroy( $id)
    {
        if(User::where('id' ,$id)->exists()){
            $user = user::find($id);
            $user->delete();


            return response()->json([
                'message'=>'user deleted successfully'
            ],200);
        }else{
            return response()->json([
                'message'=>'user not found'
            ],404);
        }
    }


}
