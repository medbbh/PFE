<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CentreController;
use App\Http\Controllers\VaccinController;
use App\Http\Controllers\API\StockController;
use App\Http\Controllers\API\PersonController;
use App\Models\Centre;
use App\Http\Resources\CentreResource;
use App\Http\Controllers\UserController;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Controllers\SmsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth
Route::post('register','App\Http\Controllers\UserController@register');
Route::post('login','App\Http\Controllers\UserController@login');

// centre
Route::get('/centres' ,function(){
    return CentreResource::collection(Centre::all());
});

Route::get('/centre/{id}' ,function($id){
    return new CentreResource(Centre::findOrFail($id));
});

Route::post('/centres' , [CentreController::class ,'store']);

Route::put('/centre/{id}' , [CentreController::class ,'update']);

Route::delete('/centre/{id}' , [CentreController::class ,'destroy']);



// vaccin
Route::get('/vaccin',[ VaccinController::class, 'getAll']);
Route::post('/vaccin',[ VaccinController::class, 'create']);
Route::delete('/vaccin/{id}',[ VaccinController::class, 'delete']);
Route::get('/vaccin/{id}',[ VaccinController::class, 'get']);
Route::put('/vaccin/{id}',[ VaccinController::class, 'update']);


//stock
Route::get('/stock',[ StockController::class, 'getAll']);
Route::post('/stock',[ StockController::class, 'create']);
Route::delete('/stock/{id}',[ StockController::class, 'delete']);
Route::get('/stock/{id}',[ StockController::class, 'get']);
Route::put('/stock/{id}',[ StockController::class, 'update']);

//person vaccinee

Route::get('/person',[ PersonController::class, 'getAll']);
Route::post('/person',[ PersonController::class, 'create']);
Route::delete('/person/{id}',[ PersonController::class, 'delete']);
Route::get('/person/{id}',[ PersonController::class, 'get']);
Route::put('/person/{id}',[ PersonController::class, 'update']);



// user

Route::get('/users' ,function(){
    return UserResource::collection(User::all());
});

Route::get('/user/{id}',[UserController::class ,'get']);

Route::delete('/user/{id}' , [UserController::class ,'destroy']);

Route::put('/madeAdmin/{id}',[ UserController::class, 'madeAdmin']);

Route::put('/deleteAdmin/{id}',[ UserController::class, 'deleteAdmin']);

Route::put('/user/{id}',[ UserController::class, 'update']);


// notification

// Route::get('/send',[ UserController::class,'send']);

// sms
Route::get('/sms', [ SmsController::class, 'sendMessage' ]);

// Route::post('send-sms', [ SmsController::class, 'sendMessage' ]);
