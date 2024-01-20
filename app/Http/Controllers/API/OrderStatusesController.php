<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderStatus;
use Illuminate\Http\Request;

class OrderStatusesController extends Controller
{
    public function index()
    {
        return OrderStatus::all();
    }

    public function store(Request $request)
    {
        $orderStatus = OrderStatus::create($request->all());
        return response()->json($orderStatus, 201);
    }

    public function show($id)
    {
        return OrderStatus::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $orderStatus = OrderStatus::findOrFail($id);
        $orderStatus->update($request->all());

        return $orderStatus;
    }

    public function destroy($id)
    {
        $orderStatus = OrderStatus::findOrFail($id);
        $orderStatus->delete();

        return response()->json(null, 204);
    }
}

