import { ProductConfigurationForm } from "@/entites/product-configuration";
import { useProductConfiguration } from "@/entites/product-configuration/api/queries";

const EditProductConfigurationPage = ({ id }) => {
    const ProductConfiguration = useProductConfiguration(id);

    if (ProductConfiguration.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductConfiguration.isError) {
        return <div>Error...</div>;
    }

    if (ProductConfiguration.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductConfigurationForm initialData={ProductConfiguration.data} />
            </div>
        </div>
    );
    }
}

export default EditProductConfigurationPage;