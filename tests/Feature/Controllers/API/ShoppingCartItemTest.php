<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Database\Factories\ShoppingCartItemFactory;

class ShoppingCartItemTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $shoppingCartItem;

    protected function setUp(): void
    {
        parent::setUp();
        $this->shoppingCartItem = ShoppingCartItemFactory::new()->create();
    }

    public function test_create_shopping_cart_item()
    {
        $response = $this->postJson('/api/shopping-cart-items', [
            'cart_id' => $this->shoppingCartItem->cart_id,
            'product_id' => $this->shoppingCartItem->product_id,
            'qty' => 1,
        ]);

        $response->assertStatus(201);
    }
    
    public function test_get_all_shopping_cart_items()
    {
        $response = $this->getJson('/api/shopping-cart-items');
        $response->assertStatus(200);
    }

    public function test_update_shopping_cart_item()
    {
        $response = $this->putJson("/api/shopping-cart-items/{$this->shoppingCartItem->id}", [
            'qty' => 1,
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('shopping_cart_items', [
            'id' => $this->shoppingCartItem->id,
            'qty' => 1,
        ]);
    } 

    public function test_delete_shopping_cart_item()
    {
        $response = $this->deleteJson("/api/shopping-cart-items/{$this->shoppingCartItem->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('shopping_cart_items', ['id' => $this->shoppingCartItem->id]);
    }
}
