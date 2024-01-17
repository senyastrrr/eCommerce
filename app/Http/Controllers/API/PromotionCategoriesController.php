<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PromotionCategory;
use Illuminate\Http\Request;

class PromotionCategoriesController extends Controller
{
    public function index()
    {
        return response()->json(PromotionCategory::all());
    }

    public function store(Request $request)
    {
        $PromotionCategory = PromotionCategory::create($request->all());
        return response()->json($PromotionCategory, 201);
    }

    public function show(PromotionCategory $PromotionCategory)
    {
        return response()->json($PromotionCategory);
    }

    public function update(Request $request, PromotionCategory $PromotionCategory)
    {
        $PromotionCategory->update($request->all());
        return response()->json($PromotionCategory, 200);
    }

    public function destroy(PromotionCategory $PromotionCategory)
    {
        $PromotionCategory->delete();
        return response()->json(null, 204);
    }
}
