<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\PromotionCategory;
use Database\Factories\CategoryFactory;

class PromotionCategoryTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $promotionCategory;
    private $category1, $category2;

    protected function setUp(): void
    {
        parent::setUp();
        $this->category1 = CategoryFactory::new()->create();
        $this->category2 = CategoryFactory::new()->create();
        $this->promotionCategory = PromotionCategory::factory()->create();
    }

    public function test_create_promotion_category()
    {
        $response = $this->postJson('/api/promotion-categories', [
            'promotion_id' => 1,
            'category_id' => $this->category1->id,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_promotion_categories()
    {
        $response = $this->getJson('/api/promotion-categories');
        $response->assertStatus(200);
    }

    public function test_update_promotion_category()
    {
        $response = $this->putJson("/api/promotion-categories/{$this->promotionCategory->id}", [
            'category_id' => $this->category2->id,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('promotion_categories', [
            'id' => $this->promotionCategory->id,
            'category_id' => $this->category2->id,
        ]);
    }

    public function test_delete_promotion_category()
    {
        $response = $this->deleteJson("/api/promotion-categories/{$this->promotionCategory->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('promotion_categories', ['id' => $this->promotionCategory->id]);
    }
}
