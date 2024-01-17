<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\Request;

class ColorsController extends Controller
{
    public function index()
    {
        return response()->json(Color::all());
    }

    public function store(Request $request)
    {
        $Color = Color::create($request->all());
        return response()->json($Color, 201);
    }

    public function show(Color $Color)
    {
        return response()->json($Color);
    }

    public function update(Request $request, Color $Color)
    {
        $Color->update($request->all());
        return response()->json($Color, 200);
    }

    public function destroy(Color $Color)
    {
        $Color->delete();
        return response()->json(null, 204);
    }
}
