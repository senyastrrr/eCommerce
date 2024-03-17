<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Models\Product;
use App\Models\ProductItem;
use App\Models\PromotionProduct;
use Illuminate\Http\Request;

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
        $discountedProducts = Product::whereIn('id', PromotionProduct::pluck('product_id'))->get();
        return response()->json($discountedProducts);
    }

    public function getProductColors($id)
    {
        $colors = Color::whereIn('id', ProductItem::where('product_id', $id)
            ->pluck('color_id'))->get();

        return response()->json($colors, 200);
    }
}
