import { Actions } from '@/shared/common/actions';
import { Price } from '@/shared/common/price';
import { Link } from '@inertiajs/react';
import { asset } from '@/shared/lib/storage-path';
import React from 'react';

export function ProductCard({ product, discount, actions }) {
  return (
    <Link href={`/product-details/${product.id}/${discount}`}>
      <div className="relative shadow-sm overflow-hidden md-4 lg-3 sm-6 p-1 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src={asset(product.image)} alt={product.name} className='rounded-lg' />
        <p className="text-lg font-semibold pt-4">{product.name}</p>
        <Actions>
          {actions}
        </Actions>
        <Price price={product.price} discount={discount} />
      </div>
    </Link>
  );
}

