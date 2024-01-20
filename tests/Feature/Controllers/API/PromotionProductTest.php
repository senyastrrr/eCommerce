<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\PromotionProduct;
use Database\Factories\ProductFactory;

class PromotionProductTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $promotionProduct;
    private $product1, $product2;
    protected function setUp(): void
    {
        parent::setUp();
        $this->product1 = ProductFactory::new()->create();
        $this->product2 = ProductFactory::new()->create();
        $this->promotionProduct = PromotionProduct::factory()->create();
    }

    public function test_create_promotion_product()
    {
        $response = $this->postJson('/api/promotion-products', [
            'promotion_id' => $this->promotionProduct->promotion_id,
            'product_id' => $this->product1->id,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_promotion_products()
    {
        $response = $this->getJson('/api/promotion-products');
        $response->assertStatus(200);
    }

    public function test_update_promotion_product()
    {
        $response = $this->putJson("/api/promotion-products/{$this->promotionProduct->id}", [
            'product_id' => $this->product2->id,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('promotion_products', [
            'id' => $this->promotionProduct->id,
            'product_id' => $this->product2->id,
        ]);
    }

    public function test_delete_promotion_product()
    {
        $response = $this->deleteJson("/api/promotion-products/{$this->promotionProduct->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('promotion_products', ['id' => $this->promotionProduct->id]);
    }
}
