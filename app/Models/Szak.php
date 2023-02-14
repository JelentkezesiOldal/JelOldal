<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szak extends Model
{
    use HasFactory;
    protected $primaryKey = 'szak_id';
    protected $fillable = [
        'megnevezes',
        //'iskola_id',
        'elofeltetel',
        'hany_felev'
    ];
}
