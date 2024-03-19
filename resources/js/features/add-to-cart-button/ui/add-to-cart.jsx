import React from 'react';
import { Button } from '@/shared/ui/button';
import { useCreateShoppingCartItem } from '@/entites/shopping-cart-item';
import { useProductItemSizeByProductAndSize } from '@/entites/product-item-size';
import { useShoppingCartByUserId } from '@/entites/shopping-cart';
import { usePage } from '@inertiajs/react';

export function AddToCartButton({ formData }) {

    const { user } = usePage().props.auth;
    const createShoppingCartItem = useCreateShoppingCartItem();
    const product = useProductItemSizeByProductAndSize(formData.product_id, formData.size_id);
    const shoppingCart = useShoppingCartByUserId(user?.id);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (product.isSuccess && shoppingCart.isSuccess)
                createShoppingCartItem.mutate({ product_id: product.data.id, cart_id: shoppingCart.data.id, qty: 1 })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button onClick={handleSubmit}>Добавить в корзину</Button>
    );
}