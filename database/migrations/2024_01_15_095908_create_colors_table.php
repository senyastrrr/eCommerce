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
        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('hex', 7);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('colors');
    }
};
