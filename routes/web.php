<?php

use App\Http\Controllers\EmailController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\InditottSzakController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JelentkezoController;
use App\Http\Controllers\JelentkezesController;
use App\Http\Controllers\SzakController;
use App\Http\Controllers\ProfileController;
<<<<<<< HEAD
=======

>>>>>>> 33e337d55726c2ceca584af0ed680fc7773e149d
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

Route::get('/', function () {
    return view('index');
});

Route::get('/admin', function () {
    return view('admin');
});

Route::get('/beiratkozas', function () {
    return view('beiratkozas');
});
Route::get('/show/{id}', [JelentkezoController::class, 'show']);
Route::patch('/beiratkozo/{id}', [JelentkezoController::class, 'beiratkozo']);
Route::patch('/file_upload',[FileController::class, 'store'])->name('beiratkozas');


 Route::get('/dashboard', function () {
    return view('dashboard');
 })->middleware(['auth'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
});

//admin lekérések
Route::get('/admin/osszes', [JelentkezesController::class, 'osszes']);
Route::get('/admin/felPlusSzak', [UserController::class, 'userAndSzak']);
Route::get('/admin/inditSzak', [SzakController::class, 'inditSzak']);
Route::get('/admin/kereses/{ertek}', [UserController::class, 'kereses']);
//admin törlések
Route::delete('/admin/torol/{jel_id}/{ind_id}', [JelentkezesController::class, 'destroy']);
//admin újadatok
Route::post('/admin/ujInditottSzak', [InditottSzakController::class, 'store']);


Route::post('/ujJelentkezo/{id}', [JelentkezoController::class, 'ujJelentkezo']);
//Route::post('/ujJelentkezes',[JelentkezesController::class, 'ujJelentkezes']);
Route::get('/inditott_szakok', [InditottSzakController::class, 'index']);

Route::get('/szak_indittotSzak', [SzakController::class,'szak_indittotSzak']);


Route::get('/email_kuldes', [EmailController::class, 'index']);


require __DIR__.'/auth.php';
