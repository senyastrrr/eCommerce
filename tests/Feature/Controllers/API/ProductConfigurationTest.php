<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\ProductConfiguration;

class ProductConfigurationTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $productConfiguration;

    protected function setUp(): void
    {
        parent::setUp();

        // Creating a product configuration
        $this->productConfiguration = ProductConfiguration::factory()->create();
    }

    public function test_create_product_configuration()
    {
        $response = $this->postJson('/api/product-configurations', [
            'product_id' => $this->productConfiguration->product_id,
            'attribute_id' => $this->productConfiguration->attribute_id,
            'value' => 'New Configuration',
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_product_configurations()
    {
        $response = $this->getJson('/api/product-configurations');
        $response->assertStatus(200);
    }

    public function test_update_product_configuration()
    {
        $response = $this->putJson("/api/product-configurations/{$this->productConfiguration->id}", [
            'value' => 'Updated Configuration',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('product_configurations', [
            'id' => $this->productConfiguration->id,
            'value' => 'Updated Configuration',
        ]);
    }

    public function test_delete_product_configuration()
    {
        $response = $this->deleteJson("/api/product-configurations/{$this->productConfiguration->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('product_configurations', ['id' => $this->productConfiguration->id]);
    }
}
