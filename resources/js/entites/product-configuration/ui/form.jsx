"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/shared/ui/input"
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
import { useCreateProductConfiguration, useUpdateProductConfiguration, useDeleteProductConfiguration } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useProducts } from "@/entites/product"
import { useProductAttributes } from "@/entites/product-attribute"

export const ProductConfigurationForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit Product Configuration' : 'Create Product Configuration';
    const description = initialData ? 'Edit a Product Configuration.' : 'Add a new Product Configuration';
    const toastMessage = initialData ? 'Product Configuration updated.' : 'Product Configuration created.';
    const action = initialData ? 'Save changes' : 'Create';

    const products = useProducts();
    const attributes = useProductAttributes();
    const createProductConfiguration = useCreateProductConfiguration();
    const updateProductConfiguration = useUpdateProductConfiguration();
    const deleteProductConfiguration = useDeleteProductConfiguration();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: null,
            product_id: '',
            attribute_id: '',
            value: '',
        }
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            setLoading(true);
            if (initialData) {
                updateProductConfiguration.mutate(data);
            } else {
                createProductConfiguration.mutate(data);
            }
            window.location.href = `/admin/product-configurations`;
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
            deleteProductConfiguration.mutate(initialData.id);
            window.location.href = `/admin/product-configurations`;
            toast.success('ProductConfiguration deleted.');
        } catch (error) {
            toast.error('Error.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }
    if (products.isSuccess && attributes.isSuccess) {
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
                                name="attribute_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value?.toString()}
                                            >
                                                <SelectTrigger id="attribute">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    {attributes.data.map((attribute) => (
                                                        <SelectItem value={attribute.id.toString()} key={attribute.id}>
                                                            {attribute.name}
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
                                name="value"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Value</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Value" {...field} />
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