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
        Schema::create('szaks', function (Blueprint $table) {
            $table->id('szak_id');
            $table->string('megnevezes');
            $table->foreignId('iskola_id')->references('iskola_id')->on('iskolas');
            $table->string('elofeltetel');
            $table->Integer('hany_felév');
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
        Schema::dropIfExists('szaks');
    }
};
