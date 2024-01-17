<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductItemSize;
use Illuminate\Http\Request;

class ProductItemSizesController extends Controller
{
    public function index()
    {
        return response()->json(ProductItemSize::all());
    }

    public function store(Request $request)
    {
        $ProductItemSize = ProductItemSize::create($request->all());
        return response()->json($ProductItemSize, 201);
    }

    public function show(ProductItemSize $ProductItemSize)
    {
        return response()->json($ProductItemSize);
    }

    public function update(Request $request, ProductItemSize $ProductItemSize)
    {
        $ProductItemSize->update($request->all());
        return response()->json($ProductItemSize, 200);
    }

    public function destroy(ProductItemSize $ProductItemSize)
    {
        $ProductItemSize->delete();
        return response()->json(null, 204);
    }
}
