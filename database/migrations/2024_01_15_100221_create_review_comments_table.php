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
        Schema::create('review_comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('review_id');
            $table->unsignedBigInteger('review_comment_id')->nullable();
            $table->text('comment');
            $table->timestamps();

            $table->foreign('review_id')->references('id')->on('reviews')->onDelete('cascade');
            $table->foreign('review_comment_id')->references('id')->on('review_comments')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('review_comments');
    }
};
