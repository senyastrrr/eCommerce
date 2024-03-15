"use client"

import { useRole } from "@/entites/role";
import { CellAction } from "../ui/cell-action"

export const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },

    {
        accessorKey: "role_id",
        header: "Role",
        cell: ({ row }) => {
            const role_id = row.original.role_id;
            const role = useRole(role_id);
            if (role.isSuccess) {
                return role.data.name;
            }
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];