<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Size;
use Illuminate\Http\Request;

class SizesController extends Controller
{
    public function index()
    {
        return response()->json(Size::all());
    }

    public function store(Request $request)
    {
        $Size = Size::create($request->all());
        return response()->json($Size, 201);
    }

    public function show(Size $Size)
    {
        return response()->json($Size);
    }

    public function update(Request $request, Size $Size)
    {
        $Size->update($request->all());
        return response()->json($Size, 200);
    }

    public function destroy(Size $Size)
    {
        $Size->delete();
        return response()->json(null, 204);
    }
}
