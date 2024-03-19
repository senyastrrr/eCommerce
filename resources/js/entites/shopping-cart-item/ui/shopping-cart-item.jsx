import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useProductItemSizeDetails } from '@/entites/product-item-size';
import { asset } from '@/shared/lib/storage-path';
import React from 'react';
import { useDeleteShoppingCartItem } from '..';

export function ShoppingCartItem({ product_id, item }) {
    const product = useProductItemSizeDetails(product_id);
    const deleteItem = useDeleteShoppingCartItem();

    const handleRemove = () => {
        deleteItem.mutate(item);
    };

    if (product.isSuccess)
        return (
            <div className="flex items-center border-b border-gray-200 py-4">
                <div className="flex-shrink-0 w-24 h-24 mr-4">
                    <img src={asset(product.data.image)} alt={product.data.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{product.data.name}</h2>
                    <p className="text-gray-700">Size: {product.data.size}</p>
                </div>
                <div>
                    <IconButton onClick={handleRemove} size="small">
                        <Delete />
                    </IconButton>
                </div>
            </div>
        );
}
