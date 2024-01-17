<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderStatus;
use Illuminate\Http\Request;

class OrderStatusesController extends Controller
{
    public function index()
    {
        return response()->json(OrderStatus::all());
    }

    public function store(Request $request)
    {
        $OrderStatus = OrderStatus::create($request->all());
        return response()->json($OrderStatus, 201);
    }

    public function show(OrderStatus $OrderStatus)
    {
        return response()->json($OrderStatus);
    }

    public function update(Request $request, OrderStatus $OrderStatus)
    {
        $OrderStatus->update($request->all());
        return response()->json($OrderStatus, 200);
    }

    public function destroy(OrderStatus $OrderStatus)
    {
        $OrderStatus->delete();
        return response()->json(null, 204);
    }
}
