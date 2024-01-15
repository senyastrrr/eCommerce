<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionProduct extends Model
{
    protected $fillable = [
        'promotion_id', 'product_id',
    ];
}
