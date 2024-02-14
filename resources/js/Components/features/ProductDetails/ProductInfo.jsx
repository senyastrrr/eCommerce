import * as React from "react"
import StarRating from "./StarRating"
import Name from "./Name"
import Price from "./Price"
import { Sizes } from '@/Components/features/ProductDetails/Sizes';
import { Button } from "@/components/shared/ui/button/button";

export default function ProductInfo({name, price, colors, sizes, rating}) {

    return (
        <div className="flex flex-wrap w-1/3 flex-col">
            <StarRating/>
            <Name name={name}/>
            <Price price={price}/>
            <Sizes/>
            <Sizes/>
            <Button>Add to cart</Button>
        </div>
    )
}
