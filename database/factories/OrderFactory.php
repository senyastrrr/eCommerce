<?php

// database/factories/OrderFactory.php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => function () {
                return \App\Models\User::factory()->create()->id;
            },
            'order_status_id' => function () {
                return \App\Models\OrderStatus::factory()->create()->id;
            },
            'created_at' => now(),
            'shipping_address' => $this->faker->address,
        ];
    }
}
