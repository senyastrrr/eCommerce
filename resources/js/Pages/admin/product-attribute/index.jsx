import { useProductAttributes, ProductAttributeClient } from "@/entites/product-attribute"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function ProductAttributesPage() {

    const ProductAttributes = useProductAttributes();

    if (ProductAttributes.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductAttributes.isError) {
        return <div>Error...</div>;
    }

    if (ProductAttributes.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <ProductAttributeClient data={ProductAttributes.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default ProductAttributesPage;
