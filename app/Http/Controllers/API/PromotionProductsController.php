<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PromotionProduct;
use Illuminate\Http\Request;

class PromotionProductsController extends Controller
{
    public function index()
    {
        return response()->json(PromotionProduct::all());
    }

    public function store(Request $request)
    {
        $PromotionProduct = PromotionProduct::create($request->all());
        return response()->json($PromotionProduct, 201);
    }

    public function show(PromotionProduct $PromotionProduct)
    {
        return response()->json($PromotionProduct);
    }

    public function update(Request $request, PromotionProduct $PromotionProduct)
    {
        $PromotionProduct->update($request->all());
        return response()->json($PromotionProduct, 200);
    }

    public function destroy(PromotionProduct $PromotionProduct)
    {
        $PromotionProduct->delete();
        return response()->json(null, 204);
    }
}
