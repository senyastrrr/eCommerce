<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Size;

class SizeTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $size;

    protected function setUp(): void
    {
        parent::setUp();
        $this->size = Size::factory()->create();
    }

    public function test_create_size()
    {
        $response = $this->postJson('/api/sizes', [
            'name' => $this->faker->word,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_sizes()
    {
        $response = $this->getJson('/api/sizes');
        $response->assertStatus(200);
    }

    public function test_update_size()
    {
        $response = $this->putJson("/api/sizes/{$this->size->id}", [
            'name' => $this->faker->word,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('sizes', [
            'id' => $this->size->id,
            'name' => $response['name'],
        ]);
    }

    public function test_delete_size()
    {
        $response = $this->deleteJson("/api/sizes/{$this->size->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('sizes', ['id' => $this->size->id]);
    }
}
