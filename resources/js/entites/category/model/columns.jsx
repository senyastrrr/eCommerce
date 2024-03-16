"use client"

import { usePromotionByCategoryId } from "@/entites/promotion/api/queries";
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
        accessorKey: "discount",
        header: "Discount",
        cell: ({ row }) => {
            const category_id = row.original.id;
            const promotion = usePromotionByCategoryId(category_id);
            if(promotion.isSuccess)
                return promotion.data.discount_rate;
            return 0;
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];