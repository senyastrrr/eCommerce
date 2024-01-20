<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductAttribute;
use Illuminate\Http\Request;

class ProductAttributesController extends Controller
{
    public function index()
    {
        return ProductAttribute::all();
    }

    public function store(Request $request)
    {
        $productAttribute = ProductAttribute::create($request->all());
        return response()->json($productAttribute, 201);
    }

    public function show($id)
    {
        return ProductAttribute::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $productAttribute = ProductAttribute::findOrFail($id);
        $productAttribute->update($request->all());

        return $productAttribute;
    }

    public function destroy($id)
    {
        $productAttribute = ProductAttribute::findOrFail($id);
        $productAttribute->delete();

        return response()->json(null, 204);
    }
}
