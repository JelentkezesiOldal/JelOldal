<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ugyintezo extends Model
{
    use HasFactory;
    protected $primaryKey = ['ugyintezo_id'];
    protected $fillable = [
        'felhasznalonev',
        'jelszo',
        'jogosultsag',
        'szak'
    ];
}
