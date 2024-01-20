<?php

// database/factories/ShoppingCartItemFactory.php

namespace Database\Factories;

use App\Models\ShoppingCartItem;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShoppingCartItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ShoppingCartItem::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cart_id' => function () {
                return \App\Models\ShoppingCart::factory()->create()->id;
            },
            'product_id' => function () {
                return \App\Models\ProductItemSize::factory()->create()->id;
            },
            
            'qty' => $this->faker->numberBetween(1, 10),
        ];
    }
}
