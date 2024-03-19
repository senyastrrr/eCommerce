<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Models\Product;
use App\Models\ProductItem;
use App\Models\PromotionCategory;
use App\Models\PromotionProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class ProductsController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return $product;
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(null, 204);
    }

    public function getDiscountedProducts()
    {
        $productsWithProductPromotions = Product::join('promotion_products', 'products.id', '=', 'promotion_products.product_id')
            ->join('promotions', 'promotion_products.promotion_id', '=', 'promotions.id')
            ->select('products.*', 'promotions.discount_rate as product_discount')
            ->get();

        $productsWithCategoryPromotions = Product::join('promotion_categories', 'products.category_id', '=', 'promotion_categories.category_id')
            ->join('promotions', 'promotion_categories.promotion_id', '=', 'promotions.id')
            ->select('products.*', 'promotions.discount_rate as category_discount')
            ->get();

        $allDiscountedProducts = $productsWithProductPromotions->merge($productsWithCategoryPromotions);

        $uniqueDiscountedProducts = $allDiscountedProducts->unique('id');

        $response = [];

        foreach ($uniqueDiscountedProducts as $product) {
            $discount_rate = $product->product_discount ?? $product->category_discount;
            $response[] = [
                'product' => $product,
                'discount_rate' => $discount_rate,
            ];
        }

        return response()->json($response);
    }

    public function getFeaturedProducts()
    {
        $discountedProductIds = PromotionProduct::pluck('product_id')->toArray();

        $discountedCategoryIds = PromotionCategory::pluck('category_id')->toArray();

        $featuredProducts = Product::whereNotIn('id', $discountedProductIds)
            ->whereNotIn('category_id', $discountedCategoryIds)
            ->where('created_at', '>', now()->subDays(30))
            ->get();

        return response()->json($featuredProducts);
    }


    public function getProductColors($id)
    {
        $colors = Color::whereIn('id', ProductItem::where('product_id', $id)
            ->pluck('color_id'))->get();

        return response()->json($colors, 200);
    }
}
