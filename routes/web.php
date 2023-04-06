<?php

use App\Http\Controllers\ArchivaltController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\InditottSzakController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JelentkezoController;
use App\Http\Controllers\JelentkezesController;
use App\Http\Controllers\SzakController;
use App\Http\Controllers\ProfileController;
use App\Models\InditottSzak;
use App\Models\Jelentkezo;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------01------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*******************************Admin***************************************/
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware( ['admin'])->group(function () {
    Route::apiResource('/users', UserController::class);
    
});
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //admin lekérések
    Route::get('/admin/osszes', [JelentkezesController::class, 'osszes']);
    Route::get('/admin/felPlusSzak', [UserController::class, 'userAndSzak']);
    Route::get('/admin/inditSzak', [SzakController::class, 'inditSzak']);
    Route::get('/admin/kereses/{ertek}', [UserController::class, 'kereses']);
    Route::get('/admin/keresesj/{ertek}', [JelentkezoController::class, 'keresesj']);
    Route::get('/admin/archivOsszes', [ArchivaltController::class, 'osszesArchivalt']);
    Route::get('/admin/elfVar', [JelentkezesController::class, 'elfogadasraVar']);
    Route::get('/admin/beirAlatt', [JelentkezesController::class, 'beiratAlatt']);
    //admin törlések
    Route::delete('/admin/torol/{jel_id}/{ind_id}', [JelentkezesController::class, 'destroy']);
    Route::delete('/admin/torolSzak/{szak_id}', [SzakController::class, 'destroy']);
    Route::delete('/admin/torolFelh/{ugyintezo_id}', [UserController::class, 'destroy']);
    Route::delete('/admin/torolIndSzak/{id}', [InditottSzakController::class, 'destroy']);
    //admin újadatok
    Route::post('/admin/ujInditottSzak', [InditottSzakController::class, 'store']);
    Route::post('/admin/ujFelhasznalo', [UserController::class, 'store']);
    Route::post('/admin/ujSzak', [SzakController::class, 'store']);
    Route::post('/admin/ujArchivum', [JelentkezesController::class, 'ujArchivalt']);
    //admin modosít
    Route::put('/admin/modosit/{id}', [JelentkezoController::class, 'update']);
    Route::put('/admin/elfogad/{id}', [JelentkezesController::class, 'elfogadas']);
    Route::put('/admin/modositSzak/{id}', [SzakController::class, 'update']);
    Route::put('/admin/statuszModosit', [ArchivaltController::class, 'statuszUpdate']);
});

Route::post('/admin/archivOsszesJel', [ArchivaltController::class, 'osszesJelentkezesArchivalas']);
Route::delete('/admin/torolOsszesJel', [ArchivaltController::class, 'osszesJelentkezesTorles']);
Route::delete('/admin/torolInditottSzak', [ArchivaltController::class, 'inditottSzakTorles']);


/*******************************Public**************************************/
Route::middleware(['publicpages'])->group(function (){
    
});
Route::middleware(['fileupload'])->group(function (){
    
});

//Jelentkezés
Route::post('/ujJelentkezo', [JelentkezoController::class, 'ujJelentkezo']);
//Route::post('/ujJelentkezes',[JelentkezesController::class, 'ujJelentkezes']);
Route::get('/inditott_szakok', [InditottSzakController::class, 'index']);
Route::get('/szak_indittotSzak', [SzakController::class,'szak_indittotSzak']);
Route::get('/email_kuldes', [EmailController::class, 'index']);
Route::get('/email_kuldes_elfogad', [EmailController::class, 'elfogad']);

//Beiratkozás
Route::patch('/beiratkozo/{token}', [JelentkezoController::class, 'beiratkozo']);
Route::get('/show/{token}', [JelentkezoController::class, 'show']);
Route::post('/file_upload',[FajlController::class, 'store']);




/******************************Oldalak**************************************/


Route::get('/', function () {   
    return view('index');
});
Route::get('/JelentkezesSikerult', function () {   
    return view('JelentkezesSikerult');
});
Route::get('/adatrogzites', function () {   
    return view('BeiratkozasSikerult');
});

Route::get('/admin', function () {
    return view('admin');
});

Route::get('/beiratkozas/{token}',function($token){
    return view('beiratkozas', ['tokenke'=>$token]);
});
Route::get('/beiratkozasfajl/{token}',function($token){
    return view('beiratkozasfajl', ['tokenke'=>$token]);
})->name('beiratkozasfajl');


//ADMIN DOLGOK KIVÜL HOGY MENJEN
//admin lekérések

//admin törlések
Route::delete('/admin/torol/{jel_id}/{ind_id}', [JelentkezesController::class, 'destroy']);
//admin újadatok

//archívum
Route::post('/admin/ujArchivum', [ArchivaltController::class, 'store']);
Route::get('/admin/archivOsszes', [ArchivaltController::class, 'osszesArchivalt']);


require __DIR__.'/auth.php';
