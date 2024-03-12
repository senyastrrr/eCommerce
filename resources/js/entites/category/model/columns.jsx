"use client"

import { useCategory } from "../api/queries";
import { CellAction } from "../ui/cell-action"

export const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },

    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "parent_id",
        header: "Parents category",
        cell: ({ row }) => {
            const parentId = row.original.parent_id;
            if (parentId === null) {
                return "None";
            }
            const parentCategory = useCategory(parentId);
            if (parentCategory.isSuccess) {
                return parentCategory.data.name;
            }
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];