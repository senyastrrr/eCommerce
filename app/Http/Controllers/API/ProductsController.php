<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return response()->json(Product::all());
    }

    public function store(Request $request)
    {
        $Product = Product::create($request->all());
        return response()->json($Product, 201);
    }

    public function show(Product $Product)
    {
        return response()->json($Product);
    }

    public function update(Request $request, Product $Product)
    {
        $Product->update($request->all());
        return response()->json($Product, 200);
    }

    public function destroy(Product $Product)
    {
        $Product->delete();
        return response()->json(null, 204);
    }
}
