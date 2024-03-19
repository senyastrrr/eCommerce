import { useProductConfigurations, ProductConfigurationClient } from "@/entites/product-configuration"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function ProductConfigurationsPage() {

    const ProductConfigurations = useProductConfigurations();

    if (ProductConfigurations.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductConfigurations.isError) {
        return <div>Error...</div>;
    }

    if (ProductConfigurations.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <ProductConfigurationClient data={ProductConfigurations.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default ProductConfigurationsPage;
