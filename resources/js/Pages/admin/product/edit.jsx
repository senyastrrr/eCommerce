import { ProductForm, useProduct } from "@/entites/product";

const EditProductPage = ({ id }) => {
    const Product = useProduct(id);

    if (Product.isLoading) {
        return <div>Loading...</div>;
    }
    if (Product.isError) {
        return <div>Error...</div>;
    }

    if (Product.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm initialData={Product.data} />
            </div>
        </div>
    );
    }
}

export default EditProductPage;