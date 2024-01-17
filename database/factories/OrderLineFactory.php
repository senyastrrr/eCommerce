<?php

// database/factories/OrderLineFactory.php

namespace Database\Factories;

use App\Models\OrderLine;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderLineFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = OrderLine::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id' => function () {
                return \App\Models\ProductItemSize::factory()->create()->product_id;
            },
            'order_id' => function () {
                return \App\Models\Order::factory()->create()->id;
            },
            'qty' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(2, 10, 100),
        ];
    }
}
