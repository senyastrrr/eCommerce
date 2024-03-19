import { useProductItems, ProductItemClient } from "@/entites/product-item"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function ProductItemsPage() {

    const ProductItems = useProductItems();

    if (ProductItems.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductItems.isError) {
        return <div>Error...</div>;
    }

    if (ProductItems.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <ProductItemClient data={ProductItems.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default ProductItemsPage;
