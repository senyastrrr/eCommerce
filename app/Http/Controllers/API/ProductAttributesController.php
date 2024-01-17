<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductAttribute;
use Illuminate\Http\Request;

class ProductAttributesController extends Controller
{
    public function index()
    {
        return response()->json(ProductAttribute::all());
    }

    public function store(Request $request)
    {
        $ProductAttribute = ProductAttribute::create($request->all());
        return response()->json($ProductAttribute, 201);
    }

    public function show(ProductAttribute $ProductAttribute)
    {
        return response()->json($ProductAttribute);
    }

    public function update(Request $request, ProductAttribute $ProductAttribute)
    {
        $ProductAttribute->update($request->all());
        return response()->json($ProductAttribute, 200);
    }

    public function destroy(ProductAttribute $ProductAttribute)
    {
        $ProductAttribute->delete();
        return response()->json(null, 204);
    }
}
