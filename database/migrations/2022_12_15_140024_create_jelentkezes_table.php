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
            $table->primary(['jelentkezo_id', 'inditott_id']);
            $table->foreignId('jelentkezo_id')->references('jelentkezo_id')->on('jelentkezos');
            $table->foreignId('inditott_id')->references('inditott_id')->on('inditott_szaks');
            $table->dateTime('datum');
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
