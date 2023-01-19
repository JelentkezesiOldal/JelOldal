<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
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
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            //ugyintezo: 0             master: 1
            $table->boolean('master')->default(false);
            $table->foreignId('szak_id')->references('szak_id')->on('szaks')->default(2);
            $table->rememberToken();
            $table->timestamps();
        });
        User::create(['name'=>'DeltazorZz','email'=>'vetka.adi@gmail.com','password'=>Hash::make('EzegyJelszo1'),'master'=>'1','szak_id'=>'1']);
        User::create(['name'=>'SzundiKa','email'=>'szundika@gmail.com','password'=>Hash::make('szundika11'),'master'=>'1','szak_id'=>'2']);
        User::create(['name'=>'ForGetAsd','email'=>'forgetasd@gmail.com','password'=>Hash::make('forgetasd123'),'master'=>'0','szak_id'=>'3']);
       /*  User::create(['felhasznalonev'=>'','email'=>'','jelszo'=>'','master'=>'','szak_id'=>'']);
        User::create(['felhasznalonev'=>'','email'=>'','jelszo'=>'','master'=>'','szak_id'=>'']);
        User::create(['felhasznalonev'=>'','email'=>'','jelszo'=>'','master'=>'','szak_id'=>'']);
     */
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
