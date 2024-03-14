import { ProductItemForm } from "@/entites/product-item";

const CreateProductItemPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductItemForm/>
            </div>
        </div>
    );
}

export default CreateProductItemPage;