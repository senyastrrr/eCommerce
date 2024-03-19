import React, { useState, useEffect } from 'react';
import { Price } from '@/shared/common/price';
import { StarRating } from '@/shared/common/rating';
import { Label } from '@/shared/ui/label';
import { AddToCartButton } from '@/features/add-to-cart-button';
import { useProductItemsByProductId } from '@/entites/product-item/api/queries';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProduct } from '@/entites/product';

export const formSchema = z.object({
    id: z.number().optional().nullable(),
    color_id: z.coerce.number(),
    size_id: z.coerce.number(),
    product_id: z.coerce.number(),
});

export function ProductInfo({ productId, discount }) {
    const [selectedColor, setSelectedColor] = useState(null);
    const [sizes, setSizes] = useState([]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: null,
            color_id: '',
            size_id: '',
            product_id: '',
        }
    });

    const products = useProductItemsByProductId(productId);
    const product = useProduct(productId);

    const handleColorChange = (colorId) => {
        setSelectedColor(colorId);
        form.setValue("color_id", colorId);
        const product = products.data.find(product => product.color_id == colorId);
        form.setValue("product_id", product.id);
        if (product) {
            setSizes(product.sizes);
        }
    };

    if (product.isSuccess && products.isSuccess)
        return (
            <div className="flex flex-wrap w-1/3 flex-col gap-8">
                <Form {...form}>
                    <form className="space-y-8 w-full">
                        <StarRating isReadOnly={true} />
                        <Label htmlFor="none" className="text-lg font-semibold">{product.data.name}</Label>
                        <Price price={product.data.price} discount={discount} />
                        <FormField
                            control={form.control}
                            name="color_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value);
                                                handleColorChange(value);
                                            }}
                                            defaultValue={field.value?.toString()}
                                        >
                                            <SelectTrigger id="color">
                                                <SelectValue placeholder="Выберите цвет" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                {products.data.map((product) => (
                                                    <SelectItem value={product.color.id.toString()} key={product.color.id}>
                                                        {product.color.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="size_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value?.toString()}
                                            disabled={!selectedColor}
                                        >
                                            <SelectTrigger id="size">
                                                <SelectValue placeholder="Выберите размер" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                {sizes.map((size) => (
                                                    <SelectItem value={size.id.toString()} key={size.id}>
                                                        {size.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <AddToCartButton formData={form.watch()} />
                    </form>
                </Form>
            </div>
        );
}
