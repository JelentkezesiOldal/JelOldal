<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kimeno extends Model
{
    use HasFactory;
    protected $fillable =[
        'sablon_id',
        'jelentkezo_id',
    ];
}
