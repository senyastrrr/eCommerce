import { ProductAttributeForm } from "@/entites/product-attribute";

const CreateProductAttributePage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductAttributeForm/>
            </div>
        </div>
    );
}

export default CreateProductAttributePage;