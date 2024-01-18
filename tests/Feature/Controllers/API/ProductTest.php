<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Product;
use App\Models\Category;

class ProductTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $product;

    protected function setUp(): void
    {
        parent::setUp();

        // Creating a category to associate with the product
        $category = Category::factory()->create();

        // Creating a product associated with the category
        $this->product = Product::factory()->create(['category_id' => $category->id]);
    }

    public function test_create_product()
    {
        $response = $this->postJson('/api/products', [
            'category_id' => $this->product->category_id,
            'title' => 'New Product',
            'name' => 'new-product',
            'description' => $this->faker->paragraph,
            'image' => 'path/to/new-image.jpg',
            'price' => 19.99,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_products()
    {
        $response = $this->getJson('/api/products');
        $response->assertStatus(200);
    }

    public function test_update_product()
    {
        $response = $this->putJson("/api/products/{$this->product->id}", [
            'title' => 'Updated Product',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('products', [
            'id' => $this->product->id,
            'title' => 'Updated Product',
        ]);
    }

    public function test_delete_product()
    {
        $response = $this->deleteJson("/api/products/{$this->product->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('products', ['id' => $this->product->id]);
    }
}
