import { ProductConfigurationForm } from "@/entites/product-configuration";

const CreateProductconfigurationPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductConfigurationForm/>
            </div>
        </div>
    );
}

export default CreateProductconfigurationPage;