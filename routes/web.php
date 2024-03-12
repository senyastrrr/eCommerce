<?php

use App\Http\Controllers\API\BillboardsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::get('/product-details/{id}', function () {
    return Inertia::render('ProductDetails', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin')->middleware(['auth', 'role:Admin,Employee'])->group(function () {
    
    Route::prefix('billboards')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/billboard/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/billboard/create');
        })->name('admin.billboards.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/billboard/edit', ['id' => $id]);
        })->name('admin.billboards.edit');
    });

    Route::prefix('categories')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/category/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/category/create');
        })->name('admin.categories.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/category/edit', ['id' => $id]);
        })->name('admin.categories.edit');
    });

    Route::prefix('sizes')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/size/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/size/create');
        })->name('admin.sizes.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/size/edit', ['id' => $id]);
        })->name('admin.sizes.edit');
    });

    Route::prefix('roles')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/role/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/role/create');
        })->name('admin.roles.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/role/edit', ['id' => $id]);
        })->name('admin.roles.edit');
    });
});

require __DIR__ . '/auth.php';
