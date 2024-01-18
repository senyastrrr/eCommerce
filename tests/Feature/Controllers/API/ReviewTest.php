<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Review;

class ReviewTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $review;

    protected function setUp(): void
    {
        parent::setUp();

        $this->review = Review::factory()->create();
    }

    public function test_create_review()
    {
        $response = $this->postJson('/api/reviews', [
            'user_id' => 1,
            'product_id' => 1,
            'value' => 5,
            'comment' => $this->faker->sentence,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_reviews()
    {
        $response = $this->getJson('/api/reviews');
        $response->assertStatus(200);
    }

    public function test_update_review()
    {
        $response = $this->putJson("/api/reviews/{$this->review->id}", [
            'comment' => 'Updated comment',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('reviews', [
            'id' => $this->review->id,
            'comment' => 'Updated comment',
        ]);
    }

    public function test_delete_review()
    {
        $response = $this->deleteJson("/api/reviews/{$this->review->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('reviews', ['id' => $this->review->id]);
    }
}
