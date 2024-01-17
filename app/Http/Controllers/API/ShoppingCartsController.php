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
        $ShoppingCart = ShoppingCart::create($request->all());
        return response()->json($ShoppingCart, 201);
    }

    public function show(ShoppingCart $ShoppingCart)
    {
        return response()->json($ShoppingCart);
    }

    public function update(Request $request, ShoppingCart $ShoppingCart)
    {
        $ShoppingCart->update($request->all());
        return response()->json($ShoppingCart, 200);
    }

    public function destroy(ShoppingCart $ShoppingCart)
    {
        $ShoppingCart->delete();
        return response()->json(null, 204);
    }
}
