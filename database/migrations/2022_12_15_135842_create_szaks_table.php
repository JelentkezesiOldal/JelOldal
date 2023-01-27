<?php

use App\Models\Szak;
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
        Schema::create('szaks', function (Blueprint $table) {
            $table->id('szak_id');
            $table->string('megnevezes');
            $table->foreignId('iskola_id')->references('iskola_id')->on('iskolas');
            $table->string('elofeltetel');
            $table->string('hany_felev');
            $table->timestamps();
        });

        Szak::create(['megnevezes'=>'Szoftverfejlesztő','iskola_id'=> 1 ,'elofeltetel'=>'Érettségi','hany_felev'=>'4']);
        Szak::create(['megnevezes'=>'Szobrász','iskola_id'=> 1 ,'elofeltetel'=>'Érettségi','hany_felev'=>'5']);
        Szak::create(['megnevezes'=>'Nyelvész','iskola_id'=> 2 ,'elofeltetel'=>'Érettségi','hany_felev'=>'4']);
        Szak::create(['megnevezes'=>'Grafikus','iskola_id'=> 2 ,'elofeltetel'=>'Érettségi','hany_felev'=>'5']);
        

        
        Szak::create(['megnevezes'=>'Szoftverfejlesztő','iskola_id'=> 1 ,'elofeltetel'=>'Érettségi','hany_felev'=>'2']);
        Szak::create(['megnevezes'=>'Nyelvész','iskola_id'=> 1 ,'elofeltetel'=>'Érettségi','hany_felev'=>'2']);
        Szak::create(['megnevezes'=>'Grafikus','iskola_id'=> 1 ,'elofeltetel'=>'Érettségi','hany_felev'=>'5']);
        Szak::create(['megnevezes'=>'Jazz balett','iskola_id'=> 2 ,'elofeltetel'=>'Érettségi','hany_felev'=>'3']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szaks');
    }
};
