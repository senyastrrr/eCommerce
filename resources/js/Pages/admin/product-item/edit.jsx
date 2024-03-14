import { ProductItemForm, useProductItem } from "@/entites/product-item";

const EditProductItemPage = ({ id }) => {
    const ProductItem = useProductItem(id);

    if (ProductItem.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductItem.isError) {
        return <div>Error...</div>;
    }

    if (ProductItem.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductItemForm initialData={ProductItem.data} />
            </div>
        </div>
    );
    }
}

export default EditProductItemPage;