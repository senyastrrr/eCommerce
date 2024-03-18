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
        $sizes = Size::all();

        foreach ($products as $product) {
            $productSizeQuantities = [];

            for ($i = 0; $i < $faker->numberBetween(2, 6); $i++) {
                $size = $sizes->random();
                $quantity = $faker->numberBetween(1, 5);

                $productSizeQuantities[] = [
                    'product_id' => $product->id,
                    'size_id' => $size->id,
                    'qty' => $quantity,
                ];
            }

            DB::table('product_item_sizes')->insert($productSizeQuantities);
        }
    }
}
