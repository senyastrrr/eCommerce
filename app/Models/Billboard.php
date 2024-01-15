<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billboard extends Model
{
    protected $fillable = [
        'image', 'content', 'isActual',
    ];
}
