<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Billboard;

class BillboardTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $billboard;

    protected function setUp(): void
    {
        parent::setUp();

        $this->billboard = Billboard::factory()->create();
    }

    public function test_create_billboard()
    {
        $response = $this->postJson('/api/billboards', [
            'image' => 'path/to/image.jpg',
            'content' => $this->faker->paragraph,
            'isActual' => true,
        ]);
        
        $response->assertStatus(201);
    }

    public function test_get_all_billboards()
    {
        $response = $this->getJson('/api/billboards');
        $response->assertStatus(200);
    }

    public function test_update_billboard()
    {
        $response = $this->putJson("/api/billboards/{$this->billboard->id}", [
            'content' => 'Updated content',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('billboards', [
            'id' => $this->billboard->id,
            'content' => 'Updated content',
        ]);
    }

    public function test_delete_billboard()
    {
        $response = $this->deleteJson("/api/billboards/{$this->billboard->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('billboards', ['id' => $this->billboard->id]);
    }
}
