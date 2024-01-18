<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Promotion;

class PromotionTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $promotion;

    protected function setUp(): void
    {
        parent::setUp();

        $this->promotion = Promotion::factory()->create();
    }

    public function test_create_promotion()
    {
        $response = $this->postJson('/api/promotions', [
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
            'discount_rate' => $this->faker->randomFloat(2, 0, 100),
            'start_date' => $this->faker->dateTimeThisMonth()->format('Y-m-d H:i:s'),
            'end_date' => $this->faker->dateTimeThisMonth()->format('Y-m-d H:i:s'),
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_promotions()
    {
        $response = $this->getJson('/api/promotions');
        $response->assertStatus(200);
    }

    public function test_update_promotion()
    {
        $response = $this->putJson("/api/promotions/{$this->promotion->id}", [
            'description' => 'Updated description',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('promotions', [
            'id' => $this->promotion->id,
            'description' => 'Updated description',
        ]);
    }

    public function test_delete_promotion()
    {
        $response = $this->deleteJson("/api/promotions/{$this->promotion->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('promotions', ['id' => $this->promotion->id]);
    }
}
