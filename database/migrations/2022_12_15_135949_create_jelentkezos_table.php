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
            $table->string('szuleteskori_neve');
            $table->string('anyja_neve');
            $table->date('szuletesi_datum');
            $table->string('szuletesi_hely');
            $table->string('email')->unique();
            $table->int('telefonszam');
            $table->string('allando_lakcim');
            //$table->kep(lakcimkartya);
            $table->string('ertesitesi_cim');
            $table->string('neme');
            $table->int('OM_azonosito');
            //$table->kep('diákigazolvány');
            $table->string('szemelyi_igazolvany_szam');
            //$table->kep('személyi igazolvány');
            $table->string('taj_szam');
            //$table->kep('taj kártya');
            $table->string('adoszam');
            //$table->kep('adóigazolvány');
            $table->string('erettsegi_bizonyitvany_szama');
            //$table->kep('érettségi bizonyítvány');
            $table->string('szakmai_bizonyitvany_szama');
            //$table->kep('szakmai bizonyítvány');
            //$table->kep('orvosi alkalmassági');
            $table->string('bankszamlaszam');
            $table->string('statusz');
            $table->timestamps();
        });

        Jelentkezo::create(['tanulo_neve'=>'','szuleteskori_neve'=>'','anyja_neve'=>'','szuletesi_datum'=>'','szuletesi_hely'=>'','email'=>'','telefonszam'=>'','allando_lakcim'=>'','gondviselo_lakasa'=>'','ertesitesi_cim'=>'','neme'=>'','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'',/*'személyi igazolvány'=>'',*/'taj_szam'=>'',/*'taj kártya'=>'',*/'adoszam'=>'',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);

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
