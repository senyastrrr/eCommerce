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
import { useCreateRole, useUpdateRole, useDeleteRole } from ".."
import DeleteIcon from '@mui/icons-material/Delete';
import { formSchema } from "../model/form-schema"

export const RoleForm = ({
    initialData
}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? 'Edit Role' : 'Create Role';
    const description = initialData ? 'Edit a Role.' : 'Add a new Role';
    const toastMessage = initialData ? 'Role updated.' : 'Role created.';
    const action = initialData ? 'Save changes' : 'Create';

    const createRole = useCreateRole();
    const updateRole = useUpdateRole();
    const deleteRole = useDeleteRole();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            id: null,
            content: '',
            image: '',
            isActual: false
        }
    });

    const onSubmit = async (data) => {
        try {
            console.log(data);
            setLoading(true);
            if (initialData) {
                updateRole.mutate(data);
            } else {
                createRole.mutate(data);
            }
            window.location.href = `/admin/roles`;
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
            deleteRole.mutate(initialData.id);
            window.location.href = `/admin/roles`;
            toast.success('Role deleted.');
        } catch (error) {
            toast.error('Make sure you removed all categories using this Role first.');
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
                                    <FormLabel>Role name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Name" {...field} />
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
                                    <FormLabel>Role description</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Description" {...field} />
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
};