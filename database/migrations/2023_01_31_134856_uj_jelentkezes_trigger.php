<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        // DB::unprepared('CREATE TRIGGER ujJelentkezes_trigger 
        // AFTER INSERT ON jelentkezos FOR EACH ROW
        // BEGIN
        //     INSERT INTO jelentkezes (jelentkezo_id, inditott_id)
        //     WHERE jelentkezo_id = NEW.jelentkezo_id
        //     AND inditott_id = NEW.inditott_id
        // END
        // ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
