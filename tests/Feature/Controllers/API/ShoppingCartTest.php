<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\ShoppingCart;
use Database\Factories\UserFactory;

class ShoppingCartTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $shoppingCart;
    private $user1, $user2;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user1 = UserFactory::new()->create();
        $this->user2 = UserFactory::new()->create();
        $this->shoppingCart = ShoppingCart::factory()->create();
    }

    public function test_create_shopping_cart()
    {
        $response = $this->postJson('/api/shopping-carts', [
            'user_id' => $this->user1->id,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_shopping_carts()
    {
        $response = $this->getJson('/api/shopping-carts');
        $response->assertStatus(200);
    }

    public function test_update_shopping_cart()
    {
        $response = $this->putJson("/api/shopping-carts/{$this->shoppingCart->id}", [
            'user_id' => $this->user2->id,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('shopping_carts', [
            'id' => $this->shoppingCart->id,
            'user_id' => $this->user2->id,
        ]);
    }

    public function test_delete_shopping_cart()
    {
        $response = $this->deleteJson("/api/shopping-carts/{$this->shoppingCart->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('shopping_carts', ['id' => $this->shoppingCart->id]);
    }
}
