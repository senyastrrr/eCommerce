<?php
use App\Http\Controllers\API\UsersController;
use App\Http\Controllers\API\BillboardsController;
use App\Http\Controllers\API\CategoriesController;
use App\Http\Controllers\API\ColorsController;
use App\Http\Controllers\API\OrderLinesController;
use App\Http\Controllers\API\OrderStatusesController;
use App\Http\Controllers\API\OrdersController;
use App\Http\Controllers\API\ProductAttributesController;
use App\Http\Controllers\API\ProductConfigurationsController;
use App\Http\Controllers\API\ProductItemsController;
use App\Http\Controllers\API\ProductItemSizesController;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\PromotionCategoriesController;
use App\Http\Controllers\API\PromotionProductsController;
use App\Http\Controllers\API\PromotionsController;
use App\Http\Controllers\API\ReviewCommentsController;
use App\Http\Controllers\API\ReviewsController;
use App\Http\Controllers\API\RolesController;
use App\Http\Controllers\API\ShoppingCartItemsController;
use App\Http\Controllers\API\ShoppingCartsController;
use App\Http\Controllers\API\SizesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/user/{id}', [UsersController::class, 'getUserById']);
Route::apiResource('users', UsersController::class);
Route::apiResource('billboards', BillboardsController::class);
Route::apiResource('categories', CategoriesController::class);
Route::apiResource('colors', ColorsController::class);
Route::apiResource('order-lines', OrderLinesController::class);
Route::apiResource('order-statuses', OrderStatusesController::class);
Route::apiResource('orders', OrdersController::class);
Route::apiResource('product-attributes', ProductAttributesController::class);
Route::apiResource('product-configurations', ProductConfigurationsController::class);
Route::apiResource('product-items', ProductItemsController::class);
Route::apiResource('product-item-sizes', ProductItemSizesController::class);
Route::apiResource('products', ProductsController::class);
Route::apiResource('promotion-categories', PromotionCategoriesController::class);
Route::apiResource('promotion-products', PromotionProductsController::class);
Route::apiResource('promotions', PromotionsController::class);
Route::apiResource('review-comments', ReviewCommentsController::class);
Route::apiResource('reviews', ReviewsController::class);
Route::apiResource('roles', RolesController::class);
Route::apiResource('shopping-cart-items', ShoppingCartItemsController::class);
Route::apiResource('shopping-carts', ShoppingCartsController::class);
Route::apiResource('sizes', SizesController::class);



