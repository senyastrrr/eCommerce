import { ProductItemSizeForm } from "@/entites/product-item-size";

const CreateProductItemSizePage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductItemSizeForm/>
            </div>
        </div>
    );
}

export default CreateProductItemSizePage;