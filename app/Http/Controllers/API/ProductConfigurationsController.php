<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductConfiguration;
use Illuminate\Http\Request;

class ProductConfigurationsController extends Controller
{
    public function index()
    {
        return ProductConfiguration::all();
    }

    public function store(Request $request)
    {
        $productConfiguration = ProductConfiguration::create($request->all());
        return response()->json($productConfiguration, 201);
    }

    public function show($id)
    {
        return ProductConfiguration::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $productConfiguration = ProductConfiguration::findOrFail($id);
        $productConfiguration->update($request->all());

        return $productConfiguration;
    }

    public function destroy($id)
    {
        $productConfiguration = ProductConfiguration::findOrFail($id);
        $productConfiguration->delete();

        return response()->json(null, 204);
    }
}

