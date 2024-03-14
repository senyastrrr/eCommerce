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
import { useCreateProductItemSize, useUpdateProductItemSize, useDeleteProductItemSize } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useProductItems } from "@/entites/product-item"
import { useSizes } from "@/entites/size"
import { Input } from "@/shared/ui/input"

export const ProductItemSizeForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit Product Item Size' : 'Create Product Item Size';
    const description = initialData ? 'Edit a Product Item Size.' : 'Add a new Product Item Size';
    const toastMessage = initialData ? 'Product Item Size updated.' : 'Product Item Size created.';
    const action = initialData ? 'Save changes' : 'Create';

    const products = useProductItems();
    const sizes = useSizes();
    const createProductItemSize = useCreateProductItemSize();
    const updateProductItemSize = useUpdateProductItemSize();
    const deleteProductItemSize = useDeleteProductItemSize();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: null,
            size_id: '',
            product_id: '',
            qty: 0,
        }
    });
    const onSubmit = async (data) => {
        try {
            console.log(data);
            setLoading(true);
            if (initialData) {
                updateProductItemSize.mutate(data);
            } else {
                createProductItemSize.mutate(data);
            }
            window.location.href = `/admin/product-item-sizes`;
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
            deleteProductItemSize.mutate(initialData.id);
            window.location.href = `/admin/product-item-sizes`;
            toast.success('ProductItemSize deleted.');
        } catch (error) {
            toast.error('Error.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }
    if (products.isSuccess && sizes.isSuccess) {
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
                                                            {product.SKU}
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
                                name="size_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Size</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center gap-x-4">
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value?.toString()}
                                                >
                                                    <SelectTrigger id="size">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent position="popper">
                                                        {sizes.data.map((size) => (
                                                            <SelectItem value={size.id.toString()} key={size.id}>
                                                                {size.name}
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

                        <div className="md:grid md:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="qty"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Quantity" {...field} />
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