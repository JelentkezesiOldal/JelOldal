<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jelentkezo extends Model
{
    use HasFactory;
    protected $primaryKey = 'jelentkezo_id';
    protected $fillable = [
        'tanulo_neve',
        'szuleteskori_neve',
        'anyja_neve',
        'szuletesi_datum',
        'szuletesi_hely',
        'email',
        'telefonszam',
        'allando_lakcim',
        'ertesitesi_cim',
        'neme',
        'OM_azonosito',
        'szemelyi_igazolvany_szam',
        'taj_szam',
        'adoszam',
        'erettsegi_bizonyitvany_szama',
        'szakmai_bizonyitvany_szama',
        'bankszamlaszam',
        'statusz',
    ];
}
