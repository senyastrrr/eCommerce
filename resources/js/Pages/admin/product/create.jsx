import { ProductForm } from "@/entites/product";

const CreateProductPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm/>
            </div>
        </div>
    );
}

export default CreateProductPage;