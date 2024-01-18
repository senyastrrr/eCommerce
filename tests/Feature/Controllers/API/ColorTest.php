<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Color;

class ColorTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $color;

    protected function setUp(): void
    {
        parent::setUp();

        $this->color = Color::factory()->create();
    }

    public function test_create_color()
    {
        $response = $this->postJson('/api/colors', [
            'name' => $this->faker->colorName,
            'hex' => $this->faker->hexColor,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_colors()
    {
        $response = $this->getJson('/api/colors');
        $response->assertStatus(200);
    }

    public function test_update_color()
    {
        $response = $this->putJson("/api/colors/{$this->color->id}", [
            'hex' => '#123456',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('colors', [
            'id' => $this->color->id,
            'hex' => '#123456',
        ]);
    }

    public function test_delete_color()
    {
        $response = $this->deleteJson("/api/colors/{$this->color->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('colors', ['id' => $this->color->id]);
    }
}
