<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Database\Factories\RoleFactory;
use App\Models\User;

class UserTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $user;

    protected function setUp(): void
    {
        parent::setUp();

        $role = RoleFactory::new()->create();
        $this->user = User::factory()->create(['role_id' => $role->id]);
    }

    public function test_create_user()
    {
        $response = $this->postJson('/api/users', [
            'name' => $this->user->name,
            'email' => "example@mail.com",
            'password' => 'password',
            'role_id' => $this->user->role_id,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_users()
    {
        $response = $this->getJson('/api/users');
        $response->assertStatus(200);
    }

    public function test_update_user()
    {
        $response = $this->putJson("/api/users/{$this->user->id}", [
            'name' => "Grisha",
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('users', [
            'id' => $this->user->id,
            'name' => "Grisha",
        ]);
    }


    public function test_delete_user()
    {
        $response = $this->deleteJson("/api/users/{$this->user->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('users', ['id' => $this->user->id]);
    }
}
