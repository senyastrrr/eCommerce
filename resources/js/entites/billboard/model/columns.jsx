"use client"

import { CellAction } from "../ui/cell-action"

export const columns = [
    {
        accessorKey: "image",
        header: "Image URL",
    },
    {
        accessorKey: "content",
        header: "Content",
    },

    {
        accessorKey: "isActual",
        header: "Is Actual",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];