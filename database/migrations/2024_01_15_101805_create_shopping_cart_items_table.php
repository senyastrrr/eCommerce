<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up() : void
    {
        Schema::create('shopping_cart_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cart_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('qty');
            $table->timestamps();

            $table->foreign('cart_id')->references('id')->on('shopping_carts');
            $table->foreign('product_id')->references('id')->on('product_item_sizes');
        });
    }

    public function down()
    {
        Schema::dropIfExists('shopping_cart_items');
    }
};
