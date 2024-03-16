<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Promotion;
use App\Models\PromotionCategory;
use App\Models\PromotionProduct;
use Illuminate\Http\Request;

class PromotionsController extends Controller
{
    public function index()
    {
        return Promotion::all();
    }

    public function store(Request $request)
    {
        $promotion = Promotion::create($request->all());
        return response()->json($promotion, 201);
    }

    public function show($id)
    {
        return Promotion::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $promotion = Promotion::findOrFail($id);
        $promotion->update($request->all());

        return $promotion;
    }

    public function destroy($id)
    {
        $promotion = Promotion::findOrFail($id);
        $promotion->delete();

        return response()->json(null, 204);
    }

    public function getByProductId($id)
    {
        $promotionProduct = PromotionProduct::where('product_id', $id)->first();
        $promotion = Promotion::findOrFail($promotionProduct->promotion_id);
        return response()->json($promotion, 201);
    }

    public function getByCategoryId($id)
    {
        $promotionCategory = PromotionCategory::where('category_id', $id)->first();
        $promotion = Promotion::findOrFail($promotionCategory->promotion_id);
        return response()->json($promotion, 201);
    }
}

