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
            //$table->kep(lakcimkartya);
            $table->string('ertesitesi_cim')->nullable();
            $table->string('neme')->nullable();
            $table->string('diak_azonosito')->nullable();
            //$table->kep('diakigazolvany');
            $table->string('szemelyi_igazolvany_szam')->nullable();
            //$table->kep('szemelyi_igazolvany');
            $table->string('taj_szam')->nullable();
            //$table->kep('taj_kartya');
            $table->string('adoszam')->nullable();
            //$table->kep('adoigazolvany');
            $table->string('erettsegi_bizonyitvany_szama')->nullable();
            //$table->kep('erettsegi_bizonyitvany');
            $table->string('szakmai_bizonyitvany_szama')->nullable();
            //$table->kep('szakmai bizonyítvány');
            //$table->kep('orvosi alkalmassági');
            $table->string('bankszamlaszam')->nullable();
            $table->string('statusz')->nullable();
            $table->timestamps();
        });

        Jelentkezo::create(['tanulo_neve'=>'Varga Peter','szuleteskori_neve'=>'Varga Peter','anyja_neve'=>'Bogar Maria','szuletesi_datum'=>'1999-02-11','szuletesi_hely'=>'Budapest','email'=>'varga22@gmail.com','telefonszam'=>'06201258974','allando_lakcim'=>'Bp. Janos utca 8','ertesitesi_cim'=>'Bp. Janos utca 8','neme'=>'f','OM_azonosito'=>'04445895148',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'55216',/*'személyi igazolvány'=>'',*/'taj_szam'=>'558468952',/*'taj kártya'=>'',*/'adoszam'=>'85645518',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        Jelentkezo::create(['tanulo_neve'=>'Pocsai Maria','szuleteskori_neve'=>'Pocsai Maria','anyja_neve'=>'Bunkos Geza','szuletesi_datum'=>'1997-10-23','szuletesi_hely'=>'Szekesfehervar','email'=>'pocsai88@freemail.hu','telefonszam'=>'063025489547','allando_lakcim'=>'Veszprem Bolay utca 23/b','ertesitesi_cim'=>'Veszprem Bolay utca 23/b','neme'=>'n','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'6485222',/*'személyi igazolvány'=>'',*/'taj_szam'=>'5418766',/*'taj kártya'=>'',*/'adoszam'=>'9786562',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        // Jelentkezo::create(['tanulo_neve'=>'','szuleteskori_neve'=>'','anyja_neve'=>'','szuletesi_datum'=>'','szuletesi_hely'=>'','email'=>'','telefonszam'=>'','allando_lakcim'=>'','ertesitesi_cim'=>'','neme'=>'','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'',/*'személyi igazolvány'=>'',*/'taj_szam'=>'',/*'taj kártya'=>'',*/'adoszam'=>'',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        

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
