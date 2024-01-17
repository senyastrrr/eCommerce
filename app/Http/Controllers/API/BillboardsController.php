<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Billboard;
use Illuminate\Http\Request;

class BillboardsController extends Controller
{
    public function index()
    {
        return response()->json(Billboard::all());
    }

    public function store(Request $request)
    {
        $Billboard = Billboard::create($request->all());
        return response()->json($Billboard, 201);
    }

    public function show(Billboard $Billboard)
    {
        return response()->json($Billboard);
    }

    public function update(Request $request, Billboard $Billboard)
    {
        $Billboard->update($request->all());
        return response()->json($Billboard, 200);
    }

    public function destroy(Billboard $Billboard)
    {
        $Billboard->delete();
        return response()->json(null, 204);
    }
}
