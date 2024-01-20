<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;

class ShoppingCartsController extends Controller
{
    public function index()
    {
        return response()->json(ShoppingCart::all());
    }

    public function store(Request $request)
    {
        $shoppingCart = ShoppingCart::create($request->all());
        return response()->json($shoppingCart, 201);
    }

    public function show($id)
    {
        return ShoppingCart::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $shoppingCart = ShoppingCart::findOrFail($id);
        $shoppingCart->update($request->all());
        return response()->json($shoppingCart, 200);
    }

    public function destroy($id)
    {
        $shoppingCart = ShoppingCart::findOrFail($id);
        $shoppingCart->delete();
        return response()->json(null, 204);
    }
}
