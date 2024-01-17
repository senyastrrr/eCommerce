<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductItemSize extends Model
{
    protected $fillable = [
        'product_id', 'size_id', 'qty',
    ];
}