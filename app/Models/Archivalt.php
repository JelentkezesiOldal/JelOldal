<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Archivalt extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'jelentkezo_id', 
        'szak_id',
        'datum'
    ];
  
}
