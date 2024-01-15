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
        Schema::create('product_item_sizes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('size_id');
            $table->integer('qty');
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('product_items')->onDelete('cascade');
            $table->foreign('size_id')->references('id')->on('sizes')->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_item_sizes');
    }
};
