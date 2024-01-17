<?php

// database/factories/ProductItemFactory.php

namespace Database\Factories;

use App\Models\ProductItem;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductItem::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id' => function () {
                return \App\Models\Product::factory()->create()->id;
            },
            'color_id' => function () {
                return \App\Models\Color::factory()->create()->id;
            },
            'SKU' => $this->faker->unique()->word,
            'image' => $this->faker->imageUrl(),
        ];
    }
}
