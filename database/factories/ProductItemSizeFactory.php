<?php

// database/factories/ProductItemSizeFactory.php

namespace Database\Factories;

use App\Models\ProductItemSize;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductItemSizeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductItemSize::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id' => function () {
                return \App\Models\ProductItem::factory()->create()->id;
            },
            'size_id' => function () {
                return \App\Models\Size::factory()->create()->id;
            },
            'qty' => $this->faker->numberBetween(1, 100),
        ];
    }
}
