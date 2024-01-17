<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderLine;
use Illuminate\Http\Request;

class OrderLinesController extends Controller
{
    public function index()
    {
        return response()->json(OrderLine::all());
    }

    public function store(Request $request)
    {
        $OrderLine = OrderLine::create($request->all());
        return response()->json($OrderLine, 201);
    }

    public function show(OrderLine $OrderLine)
    {
        return response()->json($OrderLine);
    }

    public function update(Request $request, OrderLine $OrderLine)
    {
        $OrderLine->update($request->all());
        return response()->json($OrderLine, 200);
    }

    public function destroy(OrderLine $OrderLine)
    {
        $OrderLine->delete();
        return response()->json(null, 204);
    }
}
