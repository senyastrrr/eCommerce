import React from "react";
import { Label } from "@/shared/ui/label";
import { getPriceWithDiscount } from "../lib/getPriceWithDiscount";

export function Price({ price, discount }) {
    const discountedPrice = getPriceWithDiscount(price, discount);

    return (
        <div className="flex flex-row gap-2">
            <Label htmlFor="none" className="text-lg text-gray-800 line-through">{price}</Label>
            <Label htmlFor="none" className="text-lg text-gray-800">{discountedPrice}$</Label>
            <Label htmlFor="none" className="text-lg text-gray-800">-{discount}%</Label>
        </div>
    )
}