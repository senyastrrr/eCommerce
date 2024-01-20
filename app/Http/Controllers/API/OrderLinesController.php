<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderLine;
use Illuminate\Http\Request;

class OrderLinesController extends Controller
{
    public function index()
    {
        return OrderLine::all();
    }

    public function store(Request $request)
    {
        $orderLine = OrderLine::create($request->all());
        return response()->json($orderLine, 201);
    }

    public function show($id)
    {
        return OrderLine::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $orderLine = OrderLine::findOrFail($id);
        $orderLine->update($request->all());

        return $orderLine;
    }

    public function destroy($id)
    {
        $orderLine = OrderLine::findOrFail($id);
        $orderLine->delete();

        return response()->json(null, 204);
    }
}

