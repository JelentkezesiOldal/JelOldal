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
        Schema::create('inditott_szaks', function (Blueprint $table) {
            $table->id('inditott_id');
            $table->foreignId('szak_id')->references('szak_id')->on(szaks);
            $table->int('allamihely');
            $table->int('onkolthely');
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
        Schema::dropIfExists('inditott_szaks');
    }
};
