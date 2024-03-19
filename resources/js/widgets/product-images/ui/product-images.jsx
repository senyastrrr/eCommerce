import { asset } from '@/shared/lib/storage-path';
import React from 'react';

export function ProductImages({ products }) {
    return (
        <div className="flex flex-col flex-wrap gap-20 hidden md:flex">
            {products.map((product, index) => (
                <div key={index} style={{ width: 150, height: 150 }}>
                    <img src={asset(product.image)} alt={product.SKU} />
                </div>
            ))}
        </div>
    );
}
