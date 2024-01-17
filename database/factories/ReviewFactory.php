<?php

// database/factories/ReviewFactory.php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Review::class;

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
            'product_id' => function () {
                return \App\Models\Product::factory()->create()->id;
            },
            'value' => $this->faker->numberBetween(1, 5),
            'comment' => $this->faker->paragraph,
        ];
    }
}
