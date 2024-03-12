import { useCategories, CategoryClient } from "@/entites/Category"

export function Categories() {

    const Categories = useCategories();

    if (Categories.isLoading) {
        return <div>Loading...</div>;
    }
    if (Categories.isError) {
        return <div>Error...</div>;
    }

    if (Categories.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <CategoryClient data={Categories.data} />
                </div>
            </div>
        )
    }
}

export default Categories;
