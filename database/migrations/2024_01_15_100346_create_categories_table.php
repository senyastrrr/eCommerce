<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('parent_id')->nullable();
            $table->string('name', 50);
            $table->string('description', 255)->nullable();
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('categories');
        });
    }

    public function down()
    {
        Schema::dropIfExists('categories');
    }
};
