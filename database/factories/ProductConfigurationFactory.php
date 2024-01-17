<?php

// database/factories/ProductConfigurationFactory.php

namespace Database\Factories;

use App\Models\ProductConfiguration;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductConfigurationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductConfiguration::class;

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
            'attribute_id' => function () {
                return \App\Models\ProductAttribute::factory()->create()->id;
            },
            'value' => $this->faker->word,
        ];
    }
}
