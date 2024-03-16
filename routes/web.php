<?php

use App\Http\Controllers\ProfileController;
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

Route::prefix('admin')->middleware(['auth', 'role:Admin'])->group(function () {

    Route::prefix('users')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/user/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/user/create');
        })->name('admin.users.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/user/edit', ['id' => $id]);
        })->name('admin.users.edit');
    });
});

Route::prefix('admin')->middleware(['auth', 'role:Admin,Employee'])->group(function () {
    
    Route::get('/', function () {
        return Inertia::render('admin/index');
    });

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

    Route::prefix('colors')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/color/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/color/create');
        })->name('admin.colors.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/color/edit', ['id' => $id]);
        })->name('admin.colors.edit');
    });

    Route::prefix('products')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/product/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/product/create');
        })->name('admin.product.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/product/edit', ['id' => $id]);
        })->name('admin.product.edit');
    });

    Route::prefix('product-attributes')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/product-attribute/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/product-attribute/create');
        })->name('admin.product.attributes.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/product-attribute/edit', ['id' => $id]);
        })->name('admin.product.attributes.edit');
    });

    Route::prefix('product-configurations')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/product-configuration/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/product-configuration/create');
        })->name('admin.product.configurations.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/product-configuration/edit', ['id' => $id]);
        })->name('admin.product.configurations.edit');
    });

    Route::prefix('product-items')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/product-item/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/product-item/create');
        })->name('admin.product.items.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/product-item/edit', ['id' => $id]);
        })->name('admin.product.items.edit');
    });

    Route::prefix('product-item-sizes')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/product-item-size/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/product-item-size/create');
        })->name('admin.product.item.sizes.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/product-item-size/edit', ['id' => $id]);
        })->name('admin.product.item.sizes.edit');
    });

    Route::prefix('promotions')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/promotion/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/promotion/create');
        })->name('admin.promotions.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/promotion/edit', ['id' => $id]);
        })->name('admin.promotions.edit');
    });

    Route::prefix('order-statuses')->group(function() {
        Route::get('/', function () {
            return Inertia::render('admin/order-status/index');
        });
        Route::get('create', function () {
            return Inertia::render('admin/order-status/create');
        })->name('admin.order.statuses.create');
    
        Route::get('edit/{id}', function ($id) {
            return Inertia::render('admin/order-status/edit', ['id' => $id]);
        })->name('admin.order.statuses.edit');
    });
});

require __DIR__ . '/auth.php';
