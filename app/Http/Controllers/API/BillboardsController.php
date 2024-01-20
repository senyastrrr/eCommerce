<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Billboard;
use Illuminate\Http\Request;

class BillboardsController extends Controller
{
    public function index()
    {
        return Billboard::all();
    }

    public function store(Request $request)
    {
        return Billboard::create($request->all());
    }

    public function show($id)
    {
        return Billboard::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $billboard = Billboard::findOrFail($id);
        $billboard->update($request->all());

        return $billboard;
    }

    public function destroy($id)
    {
        $billboard = Billboard::findOrFail($id);
        $billboard->delete();

        return response()->json(null, 204);
    }
}
