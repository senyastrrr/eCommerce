<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductItem;
use Illuminate\Http\Request;

class ProductItemsController extends Controller
{
    public function index()
    {
        return ProductItem::all();
    }

    public function store(Request $request)
    {
        $productItem = ProductItem::create($request->all());
        return response()->json($productItem, 201);
    }

    public function show($id)
    {
        return ProductItem::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $productItem = ProductItem::findOrFail($id);
        $productItem->update($request->all());

        return $productItem;
    }

    public function destroy($id)
    {
        $productItem = ProductItem::findOrFail($id);
        $productItem->delete();

        return response()->json(null, 204);
    }

    public function getByProductId($id){
        $productItems = ProductItem::with('color', 'sizes')->where('product_id', $id)->get();
        return response()->json($productItems, 201);
    }
}

