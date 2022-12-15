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
        Schema::create('jelentkezes', function (Blueprint $table) {
            $table->foreignId('jelentkezo_id')->references('jelentkezo_id')->on('jelentkezos');
            $table->foreignId('inditott_azon')->references('inditott_azon')->on('inditott_szaks');
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
        Schema::dropIfExists('jelentkezes');
    }
};
