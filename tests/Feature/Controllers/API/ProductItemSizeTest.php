<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\ProductItemSize;

class ProductItemSizeTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $productItemSize;

    protected function setUp(): void
    {
        parent::setUp();

        $this->productItemSize = ProductItemSize::factory()->create();
    }

    public function test_create_product_item_size()
    {
        $response = $this->postJson('/api/product-item-sizes', [
            'product_id' => $this->productItemSize->product_id,
            'size_id' => $this->productItemSize->size_id,
            'qty' => 10,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_product_item_sizes()
    {
        $response = $this->getJson('/api/product-item-sizes');
        $response->assertStatus(200);
    }

    public function test_update_product_item_size()
    {
        $response = $this->putJson("/api/product-item-sizes/{$this->productItemSize->id}", [
            'qty' => 20,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('product_item_sizes', [
            'id' => $this->productItemSize->id,
            'qty' => 20,
        ]);
    }

    public function test_delete_product_item_size()
    {
        $response = $this->deleteJson("/api/product-item-sizes/{$this->productItemSize->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('product_item_sizes', ['id' => $this->productItemSize->id]);
    }
}
