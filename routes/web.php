<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\JelentkezoController;
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
    Route::put('/beiratkozo', [JelentkezoController::class, 'beiratkozo']);
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
});
Route::get('/admin/jelentkezok', [JelentkezoController::class, 'index']);
Route::delete('/admin/jelentkezok/torol/{id}', [JelentkezoController::class, 'destroy']);
Route::get('/admin/felhasznalok', [UserController::class, 'index']);

//patch kéne mert egy tábla bizonyos adatának/adatainak a módosítása az adott táblában(paraméteres)
Route::get('/jelentkezok', [JelentkezoController::class, 'index'] );
Route::post('/ujJelentkezo', [JelentkezoController::class, 'ujJelentkezo']);
//Route::post('jelentkezoHaromAdat','JelentkezoController@jelentkezoHaromAdat');


require __DIR__.'/auth.php';
