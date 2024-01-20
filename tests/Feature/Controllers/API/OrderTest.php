<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Order;

class OrderTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $order;

    protected function setUp(): void
    {
        parent::setUp();

        $this->order = Order::factory()->create();
    }

    public function test_create_order()
    {
        $response = $this->postJson('/api/orders', [
            'user_id' => $this->order->user_id,
            'order_status_id' => $this->order->order_status_id,
            'created_at' => now(),
            'shipping_address' => $this->faker->address,
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_orders()
    {
        $response = $this->getJson('/api/orders');
        $response->assertStatus(200);
    }

    public function test_update_order()
    {
        $response = $this->putJson("/api/orders/{$this->order->id}", [
            'shipping_address' => 'Updated Address',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('orders', [
            'id' => $this->order->id,
            'shipping_address' => 'Updated Address',
        ]);
    }

    public function test_delete_order()
    {
        $response = $this->deleteJson("/api/orders/{$this->order->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('orders', ['id' => $this->order->id]);
    }
}
