"use client"

import { useProductAttribute } from "@/entites/product-attribute";
import { CellAction } from "../ui/cell-action"
import { useProduct } from "@/entites/product";

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
        accessorKey: "attribute_id",
        header: "Attribute",
        cell: ({ row }) => {
            const attribute_id = row.original.attribute_id;
            const attribute = useProductAttribute(attribute_id);
            if (attribute.isSuccess) {
                return attribute.data.name;
            }
        }
    },
    {
        accessorKey: "value",
        header: "Value",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    },
];