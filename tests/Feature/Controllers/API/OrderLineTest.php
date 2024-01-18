<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\OrderLine;

class OrderLineTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $orderLine;

    protected function setUp(): void
    {
        parent::setUp();

        $this->orderLine = OrderLine::factory()->create();
    }

    public function test_create_order_line()
    {
        $response = $this->postJson('/api/order-lines', [
            'product_id' => $this->orderLine->product_id,
            'order_id' => $this->orderLine->order_id,
            'qty' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(2, 10, 100),
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_order_lines()
    {
        $response = $this->getJson('/api/order-lines');
        $response->assertStatus(200);
    }

    public function test_update_order_line()
    {
        $response = $this->putJson("/api/order-lines/{$this->orderLine->id}", [
            'qty' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(2, 10, 100),
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('order_lines', [
            'id' => $this->orderLine->id,
            'qty' => $response['qty'],
            'price' => $response['price'],
        ]);
    }

    public function test_delete_order_line()
    {
        $response = $this->deleteJson("/api/order-lines/{$this->orderLine->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('order_lines', ['id' => $this->orderLine->id]);
    }
}
