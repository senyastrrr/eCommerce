<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function index()
    {
        return Review::all();
    }

    public function store(Request $request)
    {
        $review = Review::create($request->all());
        return response()->json($review, 201);
    }

    public function show($id)
    {
        return Review::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);
        $review->update($request->all());

        return $review;
    }

    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();

        return response()->json(null, 204);
    }
}

