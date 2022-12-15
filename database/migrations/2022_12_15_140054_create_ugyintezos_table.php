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
        Schema::create('ugyintezos', function (Blueprint $table) {
            $table->id('ugyintezo_id');
            $table->string('felhasznalonev');
            $table->string('jelszo');
            $table->boolean('Master')->default(0);
            $table->foreignId('szak')->referneces('szak_id')->on('szaks');
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
        Schema::dropIfExists('ugyintezos');
    }
};
