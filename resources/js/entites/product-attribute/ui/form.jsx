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
import { useCreateProductAttribute, useUpdateProductAttribute, useDeleteProductAttribute } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"

export const ProductAttributeForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit Product Attribute' : 'Create Product Attribute';
    const description = initialData ? 'Edit a Product Attribute.' : 'Add a new Product Attribute';
    const toastMessage = initialData ? 'Product Attribute updated.' : 'Product Attribute created.';
    const action = initialData ? 'Save changes' : 'Create';

    const createProductAttribute = useCreateProductAttribute();
    const updateProductAttribute = useUpdateProductAttribute();
    const deleteProductAttribute = useDeleteProductAttribute();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: null,
            name: '',
        }
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            setLoading(true);
            if (initialData) {
                updateProductAttribute.mutate(data);
            } else {
                createProductAttribute.mutate(data);
            }
            window.location.href = `/admin/product-attributes`;
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
            deleteProductAttribute.mutate(initialData.id);
            window.location.href = `/admin/product-attributes`;
            toast.success('Product Attribute deleted.');
        } catch (error) {
            toast.error('Error.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }
    
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Attribute name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Product Attribute name" {...field} />
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