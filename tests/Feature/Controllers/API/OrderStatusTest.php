<?php

namespace Tests\Feature\Controllers\API;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\OrderStatus;

class OrderStatusTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private $orderStatus;

    protected function setUp(): void
    {
        parent::setUp();

        $this->orderStatus = OrderStatus::factory()->create();
    }

    public function test_create_order_status()
    {
        $response = $this->postJson('/api/order-statuses', [
            'status' => 'New Status',
        ]);

        $response->assertStatus(201);
    }

    public function test_get_all_order_statuses()
    {
        $response = $this->getJson('/api/order-statuses');
        $response->assertStatus(200);
    }

    public function test_update_order_status()
    {
        $response = $this->putJson("/api/order-statuses/{$this->orderStatus->id}", [
            'status' => 'Updated Status',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('order_statuses', [
            'id' => $this->orderStatus->id,
            'status' => 'Updated Status',
        ]);
    }

    public function test_delete_order_status()
    {
        $response = $this->deleteJson("/api/order-statuses/{$this->orderStatus->id}");

        $response->assertStatus(204);
        $this->assertDatabaseMissing('order_statuses', ['id' => $this->orderStatus->id]);
    }
}
