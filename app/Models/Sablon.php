<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sablon extends Model
{
    use HasFactory;
    protected $primaryKey = ['sablon_id'];
    protected $fillable = [
        'sablon_szoveg',
        'status'
    ];
}
