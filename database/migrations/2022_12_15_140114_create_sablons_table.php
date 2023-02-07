<?php

use App\Models\Sablon;
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
        Schema::create('sablons', function (Blueprint $table) {
            $table->id('sablon_id');
            $table->string('sablon_szoveg');
            $table->string('status');
            $table->timestamps();
        });

        Sablon::create(['sablon_szoveg'=> 'Ez egy sablon szöveg','status'=>'2']);
        Sablon::create(['sablon_szoveg'=> 'Ez még egy sablon szöveg','status'=>'1']);
        Sablon::create(['sablon_szoveg'=> 'Ez egy harmadik sablon szöveg','status'=>'1']);
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sablons');
    }
};
