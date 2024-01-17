<?php

// database/factories/BillboardFactory.php

namespace Database\Factories;

use App\Models\Billboard;
use Illuminate\Database\Eloquent\Factories\Factory;

class BillboardFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Billboard::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'image' => $this->faker->imageUrl(),
            'content' => $this->faker->text,
            'isActual' => $this->faker->boolean,
        ];
    }
}
