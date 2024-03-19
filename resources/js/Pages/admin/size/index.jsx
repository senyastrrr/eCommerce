import { useSizes, SizeClient } from "@/entites/size"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function SizesPage() {

    const Sizes = useSizes();

    if (Sizes.isLoading) {
        return <div>Loading...</div>;
    }
    if (Sizes.isError) {
        return <div>Error...</div>;
    }

    if (Sizes.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <SizeClient data={Sizes.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default SizesPage;
