<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\Request;

class ColorsController extends Controller
{
    public function index()
    {
        return Color::all();
    }

    public function store(Request $request)
    {
        $color = Color::create($request->all());
        return response()->json($color, 201);
    }

    public function show($id)
    {
        return Color::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $color = Color::findOrFail($id);
        $color->update($request->all());

        return $color;
    }

    public function destroy($id)
    {
        $color = Color::findOrFail($id);
        $color->delete();

        return response()->json(null, 204);
    }
}

