<?php

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
            $table->string('Tanulo neve');
            $table->string('Születéskori neve');
            $table->string('Anyja neve');
            $table->date('Születési dátum');
            $table->string('Születési hely');
            $table->string('email')->unique();
            $table->int('Telefonszám');
            $table->string('Állandó Lakcím');
            $table->string('Gondviselő Lakása');
            $table->string('Értesítési cím');
            $table->string('Neme');
            $table->int('OM azonosító');
            //$table->kep('Diákigazolvány');
            $table->string('SzemélyiIgazolványSzám');
            //$table->kep('Személyi igazolvány');
            $table->int('Taj szám');
            //$table->kep('Taj kártya');
            $table->int('Adószám');
            //$table->kep('Adóigazolvány');
            $table->string('ÉretségiBizonyítványSzáma');
            //$table->kep('Éretségi bizonyítvány');
            $table->int('SzakmaiBizonyítványSzáma');
            //$table->kep('Szakmai Bizonyítvány');
            //$table->kep('Orvosi Alkalmassági');
            $table->int('Bankszámlaszám');
            $table->string('Státusz');
            $table->timestamps();
        });

        Jelentkezo::create(['Tanulo neve'=>'','Születéskori neve'=>'','Anyja neve'=>'','Születési dátum'=>'','Születési hely'=>'','email'=>'','Telefonszám'=>'','Állandó Lakcím'=>'','Gondviselő Lakása'=>'','Értesítési cím'=>'','Neme'=>'','OM azonosító'=>'',/*'Diákigazolvány'=>'',*/'SzemélyiIgazolványSzám'=>'',/*'Személyi igazolvány'=>'',*/'Taj szám'=>'',/*'Taj kártya'=>'',*/'Adószám'=>'',/*'Adóigazolvány'=>'',*/'ÉretségiBizonyítványSzáma'=>'',/*'Éretségi bizonyítvány'=>'',*/'SzakmaiBizonyítványSzáma'=>'',/*'Szakmai Bizonyítvány'=>'','Orvosi Alkalmassági'=>'',*/'Bankszámlaszám'=>'','Státusz'=>'',''=>'']);

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
