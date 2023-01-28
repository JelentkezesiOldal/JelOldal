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
            $table->integer('allamihely');
            $table->integer('onkolthely');
            $table->timestamps();
        });
        
        InditottSzak::create(['szak_id'=>1,'allamihely'=> 25,'onkolthely'=>25]);
        InditottSzak::create(['szak_id'=>2,'allamihely'=> 25,'onkolthely'=>15]);
        InditottSzak::create(['szak_id'=>7,'allamihely'=> 15,'onkolthely'=>15]);
        InditottSzak::create(['szak_id'=>3,'allamihely'=> 25,'onkolthely'=>45]);
        InditottSzak::create(['szak_id'=>8,'allamihely'=> 10,'onkolthely'=>35]);
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
