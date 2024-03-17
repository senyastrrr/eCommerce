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
}
