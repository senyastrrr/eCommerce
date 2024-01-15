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
        Schema::create('promotion_categories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('promotion_id');
            $table->unsignedBigInteger('category_id');
            $table->timestamps();

            $table->foreign('promotion_id')->references('id')->on('promotions');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    public function down()
    {
        Schema::dropIfExists('promotion_categories');
    }
};
