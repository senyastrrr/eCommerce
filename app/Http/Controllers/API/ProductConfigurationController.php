<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductConfiguration;
use Illuminate\Http\Request;

class ProductConfigurationController extends Controller
{
    public function index()
    {
        return response()->json(ProductConfiguration::all());
    }

    public function store(Request $request)
    {
        $ProductConfiguration = ProductConfiguration::create($request->all());
        return response()->json($ProductConfiguration, 201);
    }

    public function show(ProductConfiguration $ProductConfiguration)
    {
        return response()->json($ProductConfiguration);
    }

    public function update(Request $request, ProductConfiguration $ProductConfiguration)
    {
        $ProductConfiguration->update($request->all());
        return response()->json($ProductConfiguration, 200);
    }

    public function destroy(ProductConfiguration $ProductConfiguration)
    {
        $ProductConfiguration->delete();
        return response()->json(null, 204);
    }
}
