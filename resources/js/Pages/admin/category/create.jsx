import { CategoryForm } from "@/entites/category";

const CreateCategoryPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm/>
            </div>
        </div>
    );
}

export default CreateCategoryPage;