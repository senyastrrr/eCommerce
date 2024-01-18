<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\ReviewComment;
use App\Models\Review;

class ReviewCommentTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $reviewComment;
    private $review;

    protected function setUp(): void
    {
        parent::setUp();
        $this->review = Review::factory()->create();
        $this->reviewComment = ReviewComment::factory()->create();
    }


    public function test_create_review_comment()
    {
        $response = $this->postJson('/api/review-comments', [
            'review_id' => $this->review->id,
            'review_comment_id' => null,
            'comment' => $this->faker->sentence,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_review_comments()
    {
        $response = $this->getJson('/api/review-comments');
        $response->assertStatus(200);
    }

    public function test_update_review_comment()
    {
        $response = $this->putJson("/api/review-comments/{$this->reviewComment->id}", [
            'comment' => 'Updated comment',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('review_comments', [
            'id' => $this->reviewComment->id,
            'comment' => 'Updated comment',
        ]);
    }

    public function test_delete_review_comment()
    {
        $response = $this->deleteJson("/api/review-comments/{$this->reviewComment->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('review_comments', ['id' => $this->reviewComment->id]);
    }
}
