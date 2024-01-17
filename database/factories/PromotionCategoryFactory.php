<?php

// database/factories/PromotionCategoryFactory.php

namespace Database\Factories;

use App\Models\PromotionCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class PromotionCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PromotionCategory::class;

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
            'category_id' => function () {
                return \App\Models\Category::factory()->create()->id;
            },
        ];
    }
}
