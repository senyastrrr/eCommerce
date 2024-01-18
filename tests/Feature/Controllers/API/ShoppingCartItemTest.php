<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Database\Factories\ShoppingCartFactory;
use Database\Factories\ProductItemSizeFactory;

class ShoppingCartItemTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $shoppingCartItem;
    private $shoppingCart;
    private $product;

    protected function setUp(): void
    {
        parent::setUp();
        $this->shoppingCart = ShoppingCartFactory::new()->create();
        $this->product = ProductItemSizeFactory::new()->create();
        $this->shoppingCartItem = ProductItemSizeFactory::new()->create();
    }

    public function test_create_shopping_cart_item()
    {
        $response = $this->postJson('/api/shopping-cart-items', [
            'cart_id' => $this->shoppingCart->id,
            'product_id' => $this->product->id,
            'qty' => 2,
        ]);

        $response->assertStatus(201);
    }

    /*
    public function test_update_shopping_cart_item()
    {
        $response = $this->putJson("/api/shopping-cart-items/{$this->shoppingCartItem->id}", [
            'qty' => 3,
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('shopping_cart_items', [
            'id' => $this->shoppingCartItem->id,
            'qty' => 3,
        ]);
    } 
    */

    public function test_get_all_shopping_cart_items()
    {
        $response = $this->getJson('/api/shopping-cart-items');
        $response->assertStatus(200);
    }

    public function test_delete_shopping_cart_item()
    {
        $response = $this->deleteJson("/api/shopping-cart-items/{$this->shoppingCartItem->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('shopping_cart_items', ['id' => $this->shoppingCartItem->id]);
    }
}
