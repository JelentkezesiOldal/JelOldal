<?php

use App\Models\Iskola;
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
        Schema::create('iskolas', function (Blueprint $table) {
            $table->id('iskola_id');
            $table->string('megnevezes');
            $table->timestamps();
        });
        Iskola::create(['megnevezes'=>'Számalk-Szalézi']);
        Iskola::create(['megnevezes'=>'Számalk-Akk']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('iskolas');
    }
};
