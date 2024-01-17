<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index()
    {
        return response()->json(Category::all());
    }

    public function store(Request $request)
    {
        $Category = Category::create($request->all());
        return response()->json($Category, 201);
    }

    public function show(Category $Category)
    {
        return response()->json($Category);
    }

    public function update(Request $request, Category $Category)
    {
        $Category->update($request->all());
        return response()->json($Category, 200);
    }

    public function destroy(Category $Category)
    {
        $Category->delete();
        return response()->json(null, 204);
    }
}
