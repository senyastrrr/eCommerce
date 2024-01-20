<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Promotion;
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
}

