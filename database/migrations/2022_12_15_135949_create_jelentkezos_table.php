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
            $table->string('tanuló neve');
            $table->string('születéskori neve');
            $table->string('anyja neve');
            $table->date('születési dátum');
            $table->string('születési hely');
            $table->string('email')->unique();
            $table->int('telefonszám');
            $table->string('állandó lakcím');
            $table->string('gondviselő lakása');
            $table->string('értesítési cím');
            $table->string('neme');
            $table->int('OM azonosító');
            //$table->kep('diákigazolvány');
            $table->string('személyi igazolvány szám');
            //$table->kep('személyi igazolvány');
            $table->string('taj szám');
            //$table->kep('taj kártya');
            $table->string('adószám');
            //$table->kep('adóigazolvány');
            $table->string('érettségi bizonyítvány száma');
            //$table->kep('érettségi bizonyítvány');
            $table->string('szakmai bizonyítvány száma');
            //$table->kep('szakmai bizonyítvány');
            //$table->kep('orvosi alkalmassági');
            $table->string('bankszámlaszám');
            $table->string('státusz');
            $table->timestamps();
        });

        Jelentkezo::create(['tanulo neve'=>'','születéskori neve'=>'','anyja neve'=>'','születési dátum'=>'','születési hely'=>'','email'=>'','telefonszám'=>'','állandó lakcím'=>'','gondviselő lakása'=>'','értesítési cím'=>'','neme'=>'','OM azonosító'=>'',/*'diákigazolvány'=>'',*/'személyi igazolvány szám'=>'',/*'személyi igazolvány'=>'',*/'taj szám'=>'',/*'taj kártya'=>'',*/'adószám'=>'',/*'adóigazolvány'=>'',*/'érettségi bizonyítvány száma'=>'',/*'érettségi bizonyítvány'=>'',*/'szakmai bizonyítvány száma'=>'',/*'szakmai bizonyítvány'=>'','orvosi alkalmassági'=>'',*/'bankszámlaszám'=>'','státusz'=>'',''=>'']);

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
