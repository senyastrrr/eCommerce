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
import { useCreateBillboard, useUpdateBillboard, useDeleteBillboard } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"
import ImageUpload from "@/shared/ui/image-upload"
import { Checkbox } from "@/shared/ui/checkbox"

export const BillboardForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit billboard' : 'Create billboard';
    const description = initialData ? 'Edit a billboard.' : 'Add a new billboard';
    const toastMessage = initialData ? 'Billboard updated.' : 'Billboard created.';
    const action = initialData ? 'Save changes' : 'Create';

    const createBillboard = useCreateBillboard();
    const updateBillboard = useUpdateBillboard();
    const deleteBillboard = useDeleteBillboard();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            content: '',
            image: '',
            isActual: false
        }
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            if (initialData) {
                updateBillboard.mutate(data);
            } else {
                createBillboard.mutate(data);
            }
            window.location.href = `/admin/billboards`;
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
            deleteBillboard.mutate(initialData.id);
            window.location.href = `/admin/billboards`;
            toast.success('Billboard deleted.');
        } catch (error) {
            toast.error('Make sure you removed all categories using this billboard first.');
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
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Background image</FormLabel>
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
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Billboard content</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Billboard content" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="isActual"
                            render={({ field }) => (
                                
                                <FormItem>
                                    <FormControl>
                                        <Checkbox
                                            label="Is Actual"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormLabel>
                                        is Actual
                                    </FormLabel>
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
};