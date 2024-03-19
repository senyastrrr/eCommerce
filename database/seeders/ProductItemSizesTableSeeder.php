<?php

namespace Database\Seeders;

use App\Models\ProductItem;
use App\Models\Size;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductItemSizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $products = ProductItem::all();
        $sizes = Size::all()->shuffle(); // Shuffle the sizes collection

        foreach ($products as $product) {
            $productSizeQuantities = [];

            // Iterate through a shuffled collection of sizes
            foreach ($sizes as $size) {
                $quantity = $faker->numberBetween(1, 5);

                $sizeId = $size->id;

                // Check if the size has already been added to the array
                if (!isset($productSizeQuantities[$sizeId])) {
                    $productSizeQuantities[$sizeId] = [
                        'product_id' => $product->id,
                        'size_id' => $sizeId,
                        'qty' => $quantity,
                    ];

                    // Ensure each product gets a unique size
                    if (count($productSizeQuantities) >= $faker->numberBetween(2, 6)) {
                        break;
                    }
                }
            }

            DB::table('product_item_sizes')->insert($productSizeQuantities);
        }
    }
}