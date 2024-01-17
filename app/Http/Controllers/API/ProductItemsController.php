<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductItem;
use Illuminate\Http\Request;

class ProductItemsController extends Controller
{
    public function index()
    {
        return response()->json(ProductItem::all());
    }

    public function store(Request $request)
    {
        $ProductItem = ProductItem::create($request->all());
        return response()->json($ProductItem, 201);
    }

    public function show(ProductItem $ProductItem)
    {
        return response()->json($ProductItem);
    }

    public function update(Request $request, ProductItem $ProductItem)
    {
        $ProductItem->update($request->all());
        return response()->json($ProductItem, 200);
    }

    public function destroy(ProductItem $ProductItem)
    {
        $ProductItem->delete();
        return response()->json(null, 204);
    }
}
