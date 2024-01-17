<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ReviewComment;
use Illuminate\Http\Request;

class ReviewCommentsController extends Controller
{
    public function index()
    {
        return response()->json(ReviewComment::all());
    }

    public function store(Request $request)
    {
        $ReviewComment = ReviewComment::create($request->all());
        return response()->json($ReviewComment, 201);
    }

    public function show(ReviewComment $ReviewComment)
    {
        return response()->json($ReviewComment);
    }

    public function update(Request $request, ReviewComment $ReviewComment)
    {
        $ReviewComment->update($request->all());
        return response()->json($ReviewComment, 200);
    }

    public function destroy(ReviewComment $ReviewComment)
    {
        $ReviewComment->delete();
        return response()->json(null, 204);
    }
}
