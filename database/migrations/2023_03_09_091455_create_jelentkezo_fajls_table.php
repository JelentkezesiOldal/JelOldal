<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use League\CommonMark\Reference\Reference;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jelentkezo_fajls', function (Blueprint $table) {
            $table->id('jelentkezo_id');
            $table->string('lakcimkartya')->nullable();
            $table->string('diakigazolvany')->nullable();
            $table->string('szemelyi_igazolvany')->nullable();
            $table->string('taj_kartya')->nullable();
            $table->string('adoigazolvany')->nullable();
            $table->string('erettsegi_bizonyitvany')->nullable();
            $table->string('szakmai_bizonyitvany')->nullable();
            $table->string('orvosi_alkalmassagi')->nullable();
           
           
           
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
        Schema::dropIfExists('jelentkezo_fajls');
    }
};
