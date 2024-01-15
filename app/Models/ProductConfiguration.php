<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductConfiguration extends Model
{
    protected $fillable = [
        'product_id', 'attribute_id', 'value',
    ];
}
