<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\ProductAttribute;

class ProductAttributeTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $productAttribute;

    protected function setUp(): void
    {
        parent::setUp();

        // Creating a product attribute
        $this->productAttribute = ProductAttribute::factory()->create();
    }

    public function test_create_product_attribute()
    {
        $response = $this->postJson('/api/product-attributes', [
            'name' => 'New Attribute',
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_product_attributes()
    {
        $response = $this->getJson('/api/product-attributes');
        $response->assertStatus(200);
    }

    public function test_update_product_attribute()
    {
        $response = $this->putJson("/api/product-attributes/{$this->productAttribute->id}", [
            'name' => 'Updated Attribute',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('product_attributes', [
            'id' => $this->productAttribute->id,
            'name' => 'Updated Attribute',
        ]);
    }

    public function test_delete_product_attribute()
    {
        $response = $this->deleteJson("/api/product-attributes/{$this->productAttribute->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('product_attributes', ['id' => $this->productAttribute->id]);
    }
}
