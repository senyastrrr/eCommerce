"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/shared/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/ui/form"
import { Separator } from "@/shared/ui/separator"
import { Heading } from "@/shared/ui/heading"
import { AlertModal } from "@/shared/modals/alert-modal"
import { useCreateProductItem, useUpdateProductItem, useDeleteProductItem } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useProducts } from "@/entites/product"
import { useColors } from "@/entites/color"
import ImageUpload from "@/shared/ui/image-upload"

export const ProductItemForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit Product Item' : 'Create Product Item';
    const description = initialData ? 'Edit a Product Item.' : 'Add a new Product Item';
    const toastMessage = initialData ? 'Product Item updated.' : 'Product Item created.';
    const action = initialData ? 'Save changes' : 'Create';

    const products = useProducts();
    const colors = useColors();
    const createProductItem = useCreateProductItem();
    const updateProductItem = useUpdateProductItem();
    const deleteProductItem = useDeleteProductItem();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: null,
            product_id: '',
            color_id: '',
            SKU: '',
            image: '',
        }
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const product = products.data.find((p) => p.id == data.product_id);
            const color = colors.data.find((c) => c.id == data.color_id);
            const sku = `${product?.name}-${color?.name}-${data.product_id}`;

            setLoading(true);
            if (initialData) {
                updateProductItem.mutate({ ...data, SKU: sku});
            } else {
                createProductItem.mutate({ ...data, SKU: sku});
            }
            window.location.href = `/admin/product-items`;
            toast.success(toastMessage);
        } catch (error) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            deleteProductItem.mutate(initialData.id);
            window.location.href = `/admin/product-items`;
            toast.success('ProductItem deleted.');
        } catch (error) {
            toast.error('Error.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }
    if (products.isSuccess && colors.isSuccess) {
        return (
            <>
                <AlertModal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    onConfirm={onDelete}
                    loading={loading}
                />
                <div className="flex items-center justify-between">
                    <Heading title={title} description={description} />
                    {initialData && (
                        <Button
                            disabled={loading}
                            variant="destructive"
                            size="sm"
                            onClick={() => setOpen(true)}
                        >
                            <DeleteIcon className="h-4 w-4" />
                        </Button>
                    )}
                </div>
                <Separator />
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <div className="md:grid md:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <ImageUpload
                                                value={field.value ? [field.value] : []}
                                                disabled={loading}
                                                onChange={(url) => field.onChange(url)}
                                                onRemove={() => field.onChange('')}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="md:grid md:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="product_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value?.toString()}
                                            >
                                                <SelectTrigger id="product">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    {products.data.map((product) => (
                                                        <SelectItem value={product.id.toString()} key={product.id}>
                                                            {product.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="md:grid md:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="color_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Color</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center gap-x-4">
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value?.toString()}
                                                >
                                                    <SelectTrigger id="color">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent position="popper">
                                                        {colors.data.map((color) => (
                                                            <SelectItem value={color.id.toString()} key={color.id}>
                                                                {color.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button disabled={loading} className="ml-auto" type="submit">
                            {action}
                        </Button>
                    </form>
                </Form>
            </>
        );
    }
};