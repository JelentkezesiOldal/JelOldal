<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\InditottSzakController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\JelentkezoController;
use App\Http\Controllers\JelentkezesController;
use App\Http\Controllers\SzakController;
use App\Http\Controllers\ProfileController;

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


// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
});
//Route::get('/admin/jelentkezok', [JelentkezoController::class, 'index']);
Route::get('/admin/osszes', [JelentkezesController::class, 'osszes']);
Route::delete('/admin/jelentkezok/torol/{id}', [JelentkezoController::class, 'destroy']);
Route::get('/admin/felhasznalok', [UserController::class, 'index']);
Route::get('/admin/felPlusSzak', [UserController::class, 'userAndSzak']);
Route::get('/admin/szakok', [SzakController::class, 'index']);
Route::get('/admin/inditSzak', [SzakController::class, 'inditSzak']);
Route::get('/admin/mutat/{jel_id}/{ind_id}', [JelentkezesController::class, 'show']);
Route::delete('/admin/torol/{jel_id}/{ind_id}', [JelentkezesController::class, 'destroy']);


Route::post('/ujJelentkezo', [JelentkezoController::class, 'ujJelentkezo']);
//Route::post('/ujJelentkezes/{id}',[JelentkezesController::class, 'ujJelentkezes']);
Route::get('/inditott_szakok', [InditottSzakController::class, 'index']);

Route::get('/szak_indittotSzak', [SzakController::class,'szak_indittotSzak']);



require __DIR__.'/auth.php';
