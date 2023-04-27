<?php

use App\Models\InditottSzak;
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
            $table->foreignId('szak_id')->references('szak_id')->on('szaks');
            $table->integer('allamihely')->nullable();
            $table->integer('onkolthely')->nullable();
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
