<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('archivalts', function (Blueprint $table) {
            $table->foreignId('j_id')->references('jelentkezo_id')->on('jelentkezos');
            $table->foreignId('i_id')->references('inditott_id')->on('inditott_szaks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('archivalts');
    }
};
