import { ProductItemSizeForm, useProductItemSize } from "@/entites/product-item-size";

const EditProductItemSizePage = ({ id }) => {
    const ProductItemSize = useProductItemSize(id);

    if (ProductItemSize.isLoading) {
        return <div>Loading...</div>;
    }
    if (ProductItemSize.isError) {
        return <div>Error...</div>;
    }

    if (ProductItemSize.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductItemSizeForm initialData={ProductItemSize.data} />
            </div>
        </div>
    );
    }
}

export default EditProductItemSizePage;