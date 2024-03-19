<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductItemSize extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'product_id', 'size_id', 'qty',
    ];

    public function size()
    {
        return $this->belongsTo(Size::class);
    }

    public function productItem()
    {
        return $this->belongsTo(ProductItem::class, 'product_id');
    }
}
