<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductItemSize;
use App\Models\Size;
use Illuminate\Http\Request;

class ProductItemSizesController extends Controller
{
    public function index()
    {
        return ProductItemSize::all();
    }

    public function store(Request $request)
    {
        $productItemSize = ProductItemSize::create($request->all());
        return response()->json($productItemSize, 201);
    }

    public function show($id)
    {
        return ProductItemSize::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $productItemSize = ProductItemSize::findOrFail($id);
        $productItemSize->update($request->all());

        return $productItemSize;
    }

    public function destroy($id)
    {
        $productItemSize = ProductItemSize::findOrFail($id);
        $productItemSize->delete();

        return response()->json(null, 204);
    }

    public function getProductItemSizes($id)
    {
        $sizes = Size::whereIn('id', ProductItemSize::where('product_id', $id)
            ->where('qty', '>', 0)
            ->pluck('size_id'))->get();

        return response()->json($sizes, 200);
    }

    public function getByProductItemAndSize($id, $size)
    {
        $productItemSize =  ProductItemSize::where('product_id', $id)->where('size_id', $size)->where('qty', '>', '0')->first();
        return response()->json($productItemSize, 200);
    }

    public function getProductItemSizeDetails($id)
    {
        $productItemSize = ProductItemSize::findOrFail($id);
        $productItem = $productItemSize->productItem;

        // Проверяем, существует ли связанный продукт
        if (!$productItem) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        $product = $productItem->product;

        // Проверяем, существует ли связанный продукт для product item
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $productName = $product->name;
        $productImage = $productItem->image;
        $productColor = $productItem->color->name;
        $productSize = $productItemSize->size()->pluck('name');
        $productQuantity = $productItemSize->qty;

        $productDetails = [
            'name' => $productName,
            'image' => $productImage,
            'color' => $productColor,
            'size' => $productSize,
            'quantity' => $productQuantity,
        ];

        return response()->json($productDetails, 200);
    }
}
