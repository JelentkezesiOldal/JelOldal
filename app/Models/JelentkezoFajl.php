<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JelentkezoFajl extends Model
{
    protected $primaryKey = 'jelentkezo_id';

   protected $fillable=[
    'lakcimkartya',
    'diakigazolvany',
    'szemelyi_igazolvany',
    'taj_kartya',
    'adoigazolvany',
    'erettsegi_bizonyitvany',
    'szakmai_bizonyitvany',
    'orvosi_alkalmassági',
   ];
}
