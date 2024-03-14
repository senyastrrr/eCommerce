"use client"

import { CellAction } from "../ui/cell-action"
import { useProduct } from "@/entites/product";
import { useColor } from "@/entites/color";

export const columns = [
    {
        accessorKey: "product_id",
        header: "Product",
        cell: ({ row }) => {
            const product_id = row.original.product_id;
            const product = useProduct(product_id);
            if (product.isSuccess) {
                return product.data.name;
            }
        }
    },
    {
        accessorKey: "color_id",
        header: "Color",
        cell: ({ row }) => {
            const color_id = row.original.color_id;
            const color = useColor(color_id);
            if (color.isSuccess) {
                return (
                    <div className="flex items-center gap-x-2">
                        {color.data.hex}
                        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: color.data.hex }} />
                    </div>
                );
            }
        }
    },
    {
        accessorKey: "image",
        header: "Image",
    },
    {
        accessorKey: "SKU",
        header: "SKU",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];