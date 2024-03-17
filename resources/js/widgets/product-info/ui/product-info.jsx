import React from 'react';
import { Price } from '@/shared/common/price';
import { StarRating } from '@/shared/common/rating';
import { CommonSelect } from '@/shared/common/select';
import { Label } from '@/shared/ui/label';
import { AddToCartButton } from '@/features/add-to-cart-button';

export function ProductInfo({ productId }) {

    return (
        <div className="flex flex-wrap w-1/3 flex-col gap-8">
            <StarRating isReadOnly={true}/>
            <Label htmlFor="none" className="text-lg font-semibold">{"T-shirt"}</Label>
            <Price price={2550} discount={10} />
            <CommonSelect placeholder={"Выберите размер"} items={["S", "M", "L", "XL"]} />
            <CommonSelect placeholder={"Выберите цвет"} items={["Белый", "Бордовый", "Оранжевый", "Салатовый"]} />
            <AddToCartButton/>
        </div>
    );
}