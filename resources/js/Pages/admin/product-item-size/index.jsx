import { useProductItemSizes, ProductItemSizeClient } from "@/entites/product-item-size"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function ProductItemSizesPage() {

    const ProductItemSizes = useProductItemSizes();

    if (ProductItemSizes.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductItemSizes.isError) {
        return <div>Error...</div>;
    }

    if (ProductItemSizes.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <ProductItemSizeClient data={ProductItemSizes.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default ProductItemSizesPage;
