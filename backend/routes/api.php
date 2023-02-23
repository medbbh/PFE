<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CentreController;
use App\Http\Controllers\VaccinController;
use App\Models\Centre;
use App\Http\Resources\CentreResource;
use App\Http\Resources\VaccinResource;
use App\Models\vaccin;

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

// Route::resource('/vaccin',VaccinController::class);

Route::get('/vaccins' ,function(){
    return VaccinResource::collection(vaccin::all());
});

Route::get('/vaccin/{id}' ,function($id){
    return new VaccinResource(vaccin::findOrFail($id));
});

Route::post('/add-vaccin' , [VaccinController::class ,'store']);

Route::put('/edit-vaccin/{id}' , [VaccinController::class ,'update']);

Route::delete('/vaccin/{id}' , [VaccinController::class ,'destroy']);
