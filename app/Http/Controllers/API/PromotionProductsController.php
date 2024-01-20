<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PromotionProduct;
use Illuminate\Http\Request;

class PromotionProductsController extends Controller
{
    public function index()
    {
        return PromotionProduct::all();
    }

    public function store(Request $request)
    {
        $promotionProduct = PromotionProduct::create($request->all());
        return response()->json($promotionProduct, 201);
    }

    public function show($id)
    {
        return PromotionProduct::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $promotionProduct = PromotionProduct::findOrFail($id);
        $promotionProduct->update($request->all());

        return $promotionProduct;
    }

    public function destroy($id)
    {
        $promotionProduct = PromotionProduct::findOrFail($id);
        $promotionProduct->delete();

        return response()->json(null, 204);
    }
}

