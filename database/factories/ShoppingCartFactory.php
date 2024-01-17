<?php

// database/factories/ShoppingCartFactory.php

namespace Database\Factories;

use App\Models\ShoppingCart;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShoppingCartFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ShoppingCart::class;

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
        ];
    }
}
