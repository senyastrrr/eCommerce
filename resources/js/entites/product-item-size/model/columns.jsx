"use client"

import { CellAction } from "../ui/cell-action"
import { useProductItem } from "@/entites/product-item";
import { useSize } from "@/entites/size";

export const columns = [
    {
        accessorKey: "product_id",
        header: "Product item",
        cell: ({ row }) => {
            const product_id = row.original.product_id;
            const product = useProductItem(product_id);
            if (product.isSuccess) {
                return product.data.SKU;
            }
        }
    },
    {
        accessorKey: "size_id",
        header: "Size",
        cell: ({ row }) => {
            const size_id = row.original.size_id;
            const size = useSize(size_id);
            if (size.isSuccess) {
                return size.data.name;
            }
        }
    },
    {
        accessorKey: "qty",
        header: "Quantity",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];