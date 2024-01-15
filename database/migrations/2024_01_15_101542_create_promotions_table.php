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
        Schema::create('promotions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('description', 255);
            $table->integer('discount_rate');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('promotions');
    }
};
