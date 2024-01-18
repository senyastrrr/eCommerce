<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\ProductItem;

class ProductItemTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $productItem;

    protected function setUp(): void
    {
        parent::setUp();

        // Creating a product item
        $this->productItem = ProductItem::factory()->create();
    }

    public function test_create_product_item()
    {
        $response = $this->postJson('/api/product-items', [
            'product_id' => 1,
            'color_id' => 1,
            'SKU' => 'ABC123',
            'image' => 'path/to/image.jpg',
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_product_items()
    {
        $response = $this->getJson('/api/product-items');
        $response->assertStatus(200);
    }

    public function test_update_product_item()
    {
        $response = $this->putJson("/api/product-items/{$this->productItem->id}", [
            'SKU' => 'UpdatedSKU',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('product_items', [
            'id' => $this->productItem->id,
            'SKU' => 'UpdatedSKU',
        ]);
    }

    public function test_delete_product_item()
    {
        $response = $this->deleteJson("/api/product-items/{$this->productItem->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('product_items', ['id' => $this->productItem->id]);
    }
}
