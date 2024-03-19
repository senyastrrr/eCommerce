import { useProducts, ProductClient } from "@/entites/product"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

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
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <ProductClient data={Products.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default ProductsPage;
