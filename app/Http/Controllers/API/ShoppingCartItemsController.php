<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ShoppingCartItem;
use Illuminate\Http\Request;

class ShoppingCartItemsController extends Controller
{
    public function index()
    {
        return response()->json(ShoppingCartItem::all());
    }

    public function store(Request $request)
    {
        $shoppingCartItem = ShoppingCartItem::create($request->all());
        return response()->json($shoppingCartItem, 201);
    }

    public function show($id)
    {
        return response()->json(ShoppingCartItem::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $shoppingCartItem = ShoppingCartItem::findOrFail($id);
        $shoppingCartItem->update($request->all());

        return response()->json($shoppingCartItem, 200);
    }

    public function destroy($id)
    {
        $shoppingCartItem = ShoppingCartItem::findOrFail($id);
        $shoppingCartItem->delete();

        return response()->json(null, 204);
    }
}
