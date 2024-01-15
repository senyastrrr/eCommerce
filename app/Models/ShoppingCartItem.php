<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingCartItem extends Model
{
    protected $fillable = [
        'cart_id', 'product_id', 'qty',
    ];
}
