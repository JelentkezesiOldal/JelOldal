<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Iskola extends Model
{
    use HasFactory;
    protected $primaryKey = 'iskola_id';
    protected $fillable = [
        'megnevezes',
    ];
}
