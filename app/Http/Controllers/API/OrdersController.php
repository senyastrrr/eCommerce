<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index()
    {
        return response()->json(Order::all());
    }

    public function store(Request $request)
    {
        $Order = Order::create($request->all());
        return response()->json($Order, 201);
    }

    public function show(Order $Order)
    {
        return response()->json($Order);
    }

    public function update(Request $request, Order $Order)
    {
        $Order->update($request->all());
        return response()->json($Order, 200);
    }

    public function destroy(Order $Order)
    {
        $Order->delete();
        return response()->json(null, 204);
    }
}
