"use client"

import { CellAction } from "../ui/cell-action"

export const columns = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];