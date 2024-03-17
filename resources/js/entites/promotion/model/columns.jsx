"use client"

import { format } from "date-fns";
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
        accessorKey: "discount_rate",
        header: "Discount",
    },
    {
        accessorKey: "start_date",
        header: "Starts",
        cell: (info) => format(new Date(info.getValue()), "PPP"),
    },
    {
        accessorKey: "end_date",
        header: "Ends",
        cell: (info) => format(new Date(info.getValue()), "PPP"),
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];