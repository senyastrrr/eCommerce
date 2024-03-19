import { useCategories, CategoryClient } from "@/entites/category"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function CategoriesPage() {

    const Categories = useCategories();

    if (Categories.isLoading) {
        return <div>Loading...</div>;
    }
    if (Categories.isError) {
        return <div>Error...</div>;
    }

    if (Categories.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <CategoryClient data={Categories.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default CategoriesPage;
