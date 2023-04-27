<?php

use App\Models\Jelentkezo;
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
        Schema::create('jelentkezos', function (Blueprint $table) {
            $table->id('jelentkezo_id');
            $table->string('tanulo_neve');
            $table->string('szuleteskori_neve')->nullable();
            $table->string('anyja_neve')->nullable();
            $table->date('szuletesi_datum')->nullable();
            $table->string('szuletesi_hely')->nullable();
            $table->string('email')->unique();
            $table->string('telefonszam');
            $table->string('allando_lakcim')->nullable();
            $table->string('ertesitesi_cim')->nullable();
            $table->string('neme')->nullable();
            $table->string('diak_azonosito')->nullable();
            $table->string('szemelyi_igazolvany_szam')->nullable();
            $table->string('taj_szam')->nullable();
            $table->string('adoszam')->nullable();
            $table->string('erettsegi_bizonyitvany_szama')->nullable();
            $table->string('bankszamlaszam')->nullable();
            $table->string('token')->nullable();
            $table->string('statusz')->nullable();
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
        Schema::dropIfExists('jelentkezos');
    }
};
