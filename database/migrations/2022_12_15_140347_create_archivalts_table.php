<?php

use App\Models\Archivalt;
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
            $table->foreignId('jelentkezo_id')->references('jelentkezo_id')->on('jelentkezos');
            $table->foreignId('inditott_id')->references('inditott_id')->on('inditott_szaks');
            $table->timestamp('datum')->useCurrent();
            $table->timestamps();
        });

        Archivalt::create(['jelentkezo_id'=> 1,'inditott_id'=>3, 'datum'=>'2022-05-01']);
        Archivalt::create(['jelentkezo_id'=> 11,'inditott_id'=>4, 'datum'=>'2023-02-21']);
        Archivalt::create(['jelentkezo_id'=> 7,'inditott_id'=>1, 'datum'=>'2023-05-21']);
        Archivalt::create(['jelentkezo_id'=> 5,'inditott_id'=>3, 'datum'=>'2023-09-11']);
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
