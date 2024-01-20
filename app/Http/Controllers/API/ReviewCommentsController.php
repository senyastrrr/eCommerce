<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ReviewComment;
use Illuminate\Http\Request;

class ReviewCommentsController extends Controller
{
    public function index()
    {
        return ReviewComment::all();
    }

    public function store(Request $request)
    {
        $reviewComment = ReviewComment::create($request->all());
        return response()->json($reviewComment, 201);
    }

    public function show($id)
    {
        return ReviewComment::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $reviewComment = ReviewComment::findOrFail($id);
        $reviewComment->update($request->all());

        return $reviewComment;
    }

    public function destroy($id)
    {
        $reviewComment = ReviewComment::findOrFail($id);
        $reviewComment->delete();

        return response()->json(null, 204);
    }
}

