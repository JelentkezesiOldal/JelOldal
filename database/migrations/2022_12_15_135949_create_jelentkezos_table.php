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
            $table->string('lakcimkartya')->nullable();
            $table->string('ertesitesi_cim')->nullable();
            $table->string('neme')->nullable();
            $table->string('diak_azonosito')->nullable();
            $table->string('diakigazolvany')->nullable();
            $table->string('szemelyi_igazolvany_szam')->nullable();
            $table->string('szemelyi_igazolvany')->nullable();
            $table->string('taj_szam')->nullable();
            $table->string('taj_kartya')->nullable();
            $table->string('adoszam')->nullable();
            $table->string('adoigazolvany')->nullable();
            $table->string('erettsegi_bizonyitvany_szama')->nullable();
            $table->string('erettsegi_bizonyitvany')->nullable();
            $table->string('szakmai_bizonyitvany_szama')->nullable();
            $table->string('szakmai_bizonyitvany')->nullable();
            $table->string('orvosi_alkalmassági')->nullable();
            $table->string('bankszamlaszam')->nullable();
            $table->string('statusz')->nullable();
            $table->timestamps();
        });

        Jelentkezo::create(['tanulo_neve'=>'Varga Peter','szuleteskori_neve'=>'Varga Peter','anyja_neve'=>'Bogar Maria','szuletesi_datum'=>'1999-02-11','szuletesi_hely'=>'Budapest','email'=>'varga22@gmail.com','telefonszam'=>'06201258974','allando_lakcim'=>'Bp. Janos utca 8','ertesitesi_cim'=>'Bp. Janos utca 8','neme'=>'f','OM_azonosito'=>'04445895148',/* 'diákigazolvány'=>`pics.szamalk.png`, */'szemelyi_igazolvany_szam'=>'55216',/*'személyi igazolvány'=>'',*/'taj_szam'=>'558468952',/*'taj kártya'=>'',*/'adoszam'=>'85645518',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        Jelentkezo::create(['tanulo_neve'=>'Pocsai Maria','szuleteskori_neve'=>'Pocsai Maria','anyja_neve'=>'Bunkos Geza','szuletesi_datum'=>'1997-10-23','szuletesi_hely'=>'Szekesfehervar','email'=>'pocsai88@freemail.hu','telefonszam'=>'063025489547','allando_lakcim'=>'Veszprem Bolay utca 23/b','ertesitesi_cim'=>'Veszprem Bolay utca 23/b','neme'=>'n','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'6485222',/*'személyi igazolvány'=>'',*/'taj_szam'=>'5418766',/*'taj kártya'=>'',*/'adoszam'=>'9786562',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        Jelentkezo::create(['tanulo_neve'=>'Virágné Mocsár Rózsa','szuleteskori_neve'=>'Mocsár Rózsa','anyja_neve'=>'Huncut Krisztina','szuletesi_datum'=>'1987-02-03','szuletesi_hely'=>'Tiszaújváros','email'=>'mocsari@citromail.hu','telefonszam'=>'06305897415','allando_lakcim'=>'Szeged Király körűt 6/b','ertesitesi_cim'=>'Szeged Király körűt 6/b','neme'=>'n','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'186549',/*'személyi igazolvány'=>'',*/'taj_szam'=>'36695481',/*'taj kártya'=>'',*/'adoszam'=>'21455896',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        Jelentkezo::create(['tanulo_neve'=>'Bebasz Ottó','szuleteskori_neve'=>'Bebasz Ottó','anyja_neve'=>'Múltkor Mónika','szuletesi_datum'=>'2003-09-17','szuletesi_hely'=>'Budapest','email'=>'bebasz.lak@gmail.com','telefonszam'=>'361487529587','allando_lakcim'=>'Budapest Vörösmarty út 63 ','ertesitesi_cim'=>'Nyíregyháza Szalai tér 3 9/1','neme'=>'f','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'14558962',/*'személyi igazolvány'=>'',*/'taj_szam'=>'3369857412',/*'taj kártya'=>'',*/'adoszam'=>'2154899',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        Jelentkezo::create(['tanulo_neve'=>'Khayru Hakim','szuleteskori_neve'=>'Khayru Hakim','anyja_neve'=>'Fiza Din','szuletesi_datum'=>'1979-10-10','szuletesi_hely'=>'Dubai','email'=>'hakim.mek@gmail.com','telefonszam'=>'25487779','allando_lakcim'=>'Pécs Kossuth utca 4','ertesitesi_cim'=>'Pécs Kossuth utca 4','neme'=>'f','OM_azonosito'=>'',/*'diákigazolvány'=>'',*/'szemelyi_igazolvany_szam'=>'1203306650',/*'személyi igazolvány'=>'',*/'taj_szam'=>'',/*'taj kártya'=>'',*/'adoszam'=>'',/*'adóigazolvány'=>'',*/'erettsegi_bizonyitvany_szama'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai_bizonyitvany_szama'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszamlaszam'=>'','statusz'=>'']);
        

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
