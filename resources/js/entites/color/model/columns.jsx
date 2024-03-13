"use client"

import { CellAction } from "../ui/cell-action"

export const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "hex",
        header: "Value",
        cell: ({ row }) => (
          <div className="flex items-center gap-x-2">
            {row.original.hex}
            <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.hex }} />
          </div>
        )
      },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];