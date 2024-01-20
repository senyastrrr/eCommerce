<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Size;
use Illuminate\Http\Request;

class SizesController extends Controller
{
    public function index()
    {
        return Size::all();
    }

    public function store(Request $request)
    {
        $size = Size::create($request->all());
        return response()->json($size, 201);
    }

    public function show($id)
    {
        return Size::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $size = Size::findOrFail($id);
        $size->update($request->all());

        return $size;
    }

    public function destroy($id)
    {
        $size = Size::findOrFail($id);
        $size->delete();

        return response()->json(null, 204);
    }
}
