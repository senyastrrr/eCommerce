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
        $ShoppingCartItems = ShoppingCartItem::create($request->all());
        return response()->json($ShoppingCartItems, 201);
    }

    public function show(ShoppingCartItem $ShoppingCartItems)
    {
        return response()->json($ShoppingCartItems);
    }

    public function update(Request $request, ShoppingCartItem $ShoppingCartItems)
    {
        $ShoppingCartItems->update($request->all());
        return response()->json($ShoppingCartItems, 200);
    }

    public function destroy(ShoppingCartItem $ShoppingCartItems)
    {
        $ShoppingCartItems->delete();
        return response()->json(null, 204);
    }
}
