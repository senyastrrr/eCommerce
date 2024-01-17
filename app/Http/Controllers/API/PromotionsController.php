<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionsController extends Controller
{
    public function index()
    {
        return response()->json(Promotion::all());
    }

    public function store(Request $request)
    {
        $Promotion = Promotion::create($request->all());
        return response()->json($Promotion, 201);
    }

    public function show(Promotion $Promotion)
    {
        return response()->json($Promotion);
    }

    public function update(Request $request, Promotion $Promotion)
    {
        $Promotion->update($request->all());
        return response()->json($Promotion, 200);
    }

    public function destroy(Promotion $Promotion)
    {
        $Promotion->delete();
        return response()->json(null, 204);
    }
}
