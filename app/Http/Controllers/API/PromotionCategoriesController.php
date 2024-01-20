<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PromotionCategory;
use Illuminate\Http\Request;

class PromotionCategoriesController extends Controller
{
    public function index()
    {
        return PromotionCategory::all();
    }

    public function store(Request $request)
    {
        $promotionCategory = PromotionCategory::create($request->all());
        return response()->json($promotionCategory, 201);
    }

    public function show($id)
    {
        return PromotionCategory::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $promotionCategory = PromotionCategory::findOrFail($id);
        $promotionCategory->update($request->all());

        return $promotionCategory;
    }

    public function destroy($id)
    {
        $promotionCategory = PromotionCategory::findOrFail($id);
        $promotionCategory->delete();

        return response()->json(null, 204);
    }
}

