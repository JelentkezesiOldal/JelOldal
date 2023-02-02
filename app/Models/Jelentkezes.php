<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jelentkezes extends Model
{
    use HasFactory;

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('jelentkezo_id', '=', $this->getAttribute('jelentkezo_id'))
            ->where('inditott_id', '=', $this->getAttribute('inditott_id'));
        return $query;
    } 

    protected $fillable = [
        'jelentkezo_id',
        'inditott_id'
    ];
}
