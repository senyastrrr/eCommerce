import { ProductAttributeForm } from "@/entites/product-attribute";
import { useProductAttribute } from "@/entites/product-attribute/api/queries";

const EditProductAttributePage = ({ id }) => {
    const ProductAttribute = useProductAttribute(id);

    if (ProductAttribute.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductAttribute.isError) {
        return <div>Error...</div>;
    }

    if (ProductAttribute.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductAttributeForm initialData={ProductAttribute.data} />
            </div>
        </div>
    );
    }
}

export default EditProductAttributePage;