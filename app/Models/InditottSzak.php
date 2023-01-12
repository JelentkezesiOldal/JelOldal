<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InditottSzak extends Model
{
    use HasFactory;
    protected $primaryKey = 'inditott_id';
    protected $fillable = [
        'szak_id',
        'allamihely',
        'onkolthely'
    ];
}
