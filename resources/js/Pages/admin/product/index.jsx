import { useProducts, ProductClient } from "@/entites/product"

export function ProductsPage() {

    const Products = useProducts();
    
    if (Products.isLoading) {
        return <div>Loading...</div>;
    }
    if (Products.isError) {
        return <div>Error...</div>;
    }

    if (Products.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <ProductClient data={Products.data} />
                </div>
            </div>
        )
    }
}

export default ProductsPage;
