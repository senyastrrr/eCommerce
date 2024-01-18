<?php

// database/factories/ReviewCommentFactory.php

namespace Database\Factories;

use App\Models\ReviewComment;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewCommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ReviewComment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'review_id' => function () {
                return \App\Models\Review::factory()->create()->id;
            },
            'review_comment_id' => null,
            'comment' => $this->faker->paragraph,
        ];
    }
}
