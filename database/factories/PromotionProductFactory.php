<?php

// database/factories/PromotionProductFactory.php

namespace Database\Factories;

use App\Models\PromotionProduct;
use Illuminate\Database\Eloquent\Factories\Factory;

class PromotionProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PromotionProduct::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'promotion_id' => function () {
                return \App\Models\Promotion::factory()->create()->id;
            },
            'product_id' => function () {
                return \App\Models\Product::factory()->create()->id;
            },
        ];
    }
}
