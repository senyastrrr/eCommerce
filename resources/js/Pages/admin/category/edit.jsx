import { CategoryForm, useCategory } from "@/entites/category";

const EditCategoryPage = ({ id }) => {
    const Category = useCategory(id);

    if (Category.isLoading) {
        return <div>Loading...</div>;
    }
    if (Category.isError) {
        return <div>Error...</div>;
    }

    if (Category.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm initialData={Category.data} />
            </div>
        </div>
    );
    }
}

export default EditCategoryPage;