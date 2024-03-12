"use client"

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
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];