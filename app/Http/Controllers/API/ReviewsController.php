<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function index()
    {
        return response()->json(Review::all());
    }

    public function store(Request $request)
    {
        $Review = Review::create($request->all());
        return response()->json($Review, 201);
    }

    public function show(Review $Review)
    {
        return response()->json($Review);
    }

    public function update(Request $request, Review $Review)
    {
        $Review->update($request->all());
        return response()->json($Review, 200);
    }

    public function destroy(Review $Review)
    {
        $Review->delete();
        return response()->json(null, 204);
    }
}
