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
import { useCreateCategory, useUpdateCategory, useDeleteCategory, useCategories } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { useCreatePromotionCategory, useUpdatePromotionCategory } from "@/entites/promotion-category"
import { usePromotion, usePromotions } from "@/entites/promotion"

export const CategoryForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit Category' : 'Create Category';
    const description = initialData ? 'Edit a Category.' : 'Add a new Category';
    const toastMessage = initialData ? 'Category updated.' : 'Category created.';
    const action = initialData ? 'Save changes' : 'Create';

    const categories = useCategories();
    const updatePromotionCategory = useUpdatePromotionCategory();
    const promotions = usePromotions();
    const createCategory = useCreateCategory();
    const updateCategory = useUpdateCategory();
    const deleteCategory = useDeleteCategory();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: null,
            parent_id: '',
            name: '',
            description: '',
            discount: null,
        }
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            setLoading(true);
            if (initialData) {
                const updatedData = { ...data };
                delete updatedData.discount;
                console.log(data.discount);
                if (data.discount)
                    updatePromotionCategory.mutate({ category_id: initialData.id, promotion_id: data.discount });
                updateCategory.mutate(updatedData);
            } else {
                createCategory.mutate(data);
            }
            window.location.href = `/admin/categories`;
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
            deleteCategory.mutate(initialData.id);
            window.location.href = `/admin/categories`;
            toast.success('Category deleted.');
        } catch (error) {
            toast.error('Error.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }
    if (categories.isSuccess && promotions.isSuccess) {
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
                                name="parent_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Parent category</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value?.toString()}
                                            >
                                                <SelectTrigger id="category">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    {categories.data
                                                        .filter((category) => category.id !== initialData?.id)
                                                        .map((category) => (
                                                            <SelectItem value={category.id.toString()} key={category.id}>
                                                                {category.name}
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
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category name</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Category name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:grid md:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category description</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Category description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="md:grid md:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="discount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Discount</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value?.toString()}
                                            >
                                                <SelectTrigger id="category">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    {promotions.data.map((promotion) => (
                                                        <SelectItem value={promotion.id.toString()} key={promotion.id}>
                                                            {promotion.name} - {promotion.discount_rate}%
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

                        <Button disabled={loading} className="ml-auto" type="submit">
                            {action}
                        </Button>
                    </form>
                </Form>
            </>
        );
    }
};