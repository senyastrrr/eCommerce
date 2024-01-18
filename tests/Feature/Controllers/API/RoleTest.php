<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Database\Factories\RoleFactory;

class RoleTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $role;

    protected function setUp(): void
    {
        parent::setUp();

        $this->role = RoleFactory::new()->create();
    }

    public function test_create_role()
    {
        $response = $this->postJson('/api/roles', [
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_roles()
    {
        $response = $this->getJson('/api/roles');
        $response->assertStatus(200);
    }

    public function test_update_role()
    {
        $response = $this->putJson("/api/roles/{$this->role->id}", [
            'description' => "Updated description",
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('roles', [
            'id' => $this->role->id,
            'description' => "Updated description",
        ]);
    }

    public function test_delete_role()
    {
        $response = $this->deleteJson("/api/roles/{$this->role->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('roles', ['id' => $this->role->id]);
    }
}
