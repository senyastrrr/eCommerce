<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Category;

class CategoryTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $category;

    protected function setUp(): void
    {
        parent::setUp();

        $this->category = Category::factory()->create();
    }

    public function test_create_category()
    {
        $response = $this->postJson('/api/categories', [
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_categories()
    {
        $response = $this->getJson('/api/categories');
        $response->assertStatus(200);
    }

    public function test_update_category()
    {
        $response = $this->putJson("/api/categories/{$this->category->id}", [
            'description' => 'Updated description',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('categories', [
            'id' => $this->category->id,
            'description' => 'Updated description',
        ]);
    }

    public function test_delete_category()
    {
        $response = $this->deleteJson("/api/categories/{$this->category->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('categories', ['id' => $this->category->id]);
    }
}
