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
use App\Http\Controllers\API\ImageController;
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
Route::get('test-discounted-products', function () {
    $controller = new ProductsController();
    return $controller->getDiscountedProducts();
});
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
Route::get('product-items/get-by-product-id/{id}', [ProductItemsController::class, 'getByProductId']);

Route::apiResource('product-item-sizes', ProductItemSizesController::class);
Route::get('product-item-sizes/get-sizes-by-product-id/{id}', [ProductItemSizesController::class, 'getProductItemSizes']);

Route::apiResource('products', ProductsController::class);
Route::get('discounted-products', [ProductsController::class, 'getDiscountedProducts']);
Route::get('products/get-product-colors/{id}', [ProductsController::class, 'getProductColors']);

Route::apiResource('promotion-categories', PromotionCategoriesController::class);
Route::apiResource('promotion-products', PromotionProductsController::class);

Route::apiResource('promotions', PromotionsController::class);
Route::get('promotions/get-by-product-id/{id}', [PromotionsController::class, 'getByProductId']);
Route::get('promotions/get-by-category-id/{id}', [PromotionsController::class, 'getByCategoryId']);

Route::apiResource('review-comments', ReviewCommentsController::class);
Route::apiResource('reviews', ReviewsController::class);
Route::apiResource('roles', RolesController::class);
Route::apiResource('shopping-cart-items', ShoppingCartItemsController::class);
Route::apiResource('shopping-carts', ShoppingCartsController::class);
Route::apiResource('sizes', SizesController::class);

Route::post('/images/upload', [ImageController::class, 'store']);