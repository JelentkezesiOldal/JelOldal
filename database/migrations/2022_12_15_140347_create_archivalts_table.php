<?php

use App\Models\Archivalt;
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
        Schema::create('archivalts', function (Blueprint $table) {
            $table->primary(['jelentkezo_id', 'szak_id']);
            $table->foreignId('jelentkezo_id')->references('jelentkezo_id')->on('jelentkezos');
            $table->foreignId('szak_id')->references('szak_id')->on('szaks');
            $table->timestamp('datum')->useCurrent();
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
        Schema::dropIfExists('archivalts');
    }
};
