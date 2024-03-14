"use client"

import { useCategory } from "@/entites/category";
import { CellAction } from "../ui/cell-action"

export const columns = [
    {
        accessorKey: "image",
        header: "Image",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "category_id",
        header: "Category",
        cell: ({ row }) => {
            const category_id = row.original.category_id;
            if (category_id === null) {
                return "None";
            }
            const category = useCategory(category_id);
            if (category.isSuccess) {
                return category.data.name;
            }
        }
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];