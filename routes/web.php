<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return Redirect::route('home');
});
Route::controller(UserController::class)->group(function () {
    Route::get('home', 'index')->name('home');
    Route::delete('home/delete/{user}', 'destroy')->name('user.destroy');
    Route::get('update', 'update')->name('user.update');
    Route::inertia('create', 'create')->name('user.create');
    Route::post('user/store', [UserController::class, 'store'])->name('user.store');
});

// Route::get('/test-in', function () {
//     return inertia('Test');
// });
