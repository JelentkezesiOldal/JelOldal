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
        Schema::create('users', function (Blueprint $table) {
            $table->id('ugyintezo_id');
            $table->string('felhasznalonev');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('jelszo');
            $table->boolean('master')->default(0);
            $table->foreignId('szak_id')->references('szak_id')->on('szaks');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
