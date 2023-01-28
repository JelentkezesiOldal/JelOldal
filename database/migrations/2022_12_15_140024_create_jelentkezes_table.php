<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Jelentkezes;
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
            $table->foreignId('inditott_id')->references('inditott_id')->on('inditott_szaks');
            $table->timestamps();
        });

        Jelentkezes::create(['jelentkezo_id'=> 1,'inditott_id'=>3]);
        Jelentkezes::create(['jelentkezo_id'=> 2,'inditott_id'=>1]);
        Jelentkezes::create(['jelentkezo_id'=> 3,'inditott_id'=>4]);
        Jelentkezes::create(['jelentkezo_id'=> 4,'inditott_id'=>5]);
        Jelentkezes::create(['jelentkezo_id'=> 5,'inditott_id'=>5]);
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
