import { useBillboards, BillboardClient } from "@/entites/billboard"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function BillboardsPage() {

    const billboards = useBillboards();

    if (billboards.isLoading) {
        return <div>Loading...</div>;
    }
    if (billboards.isError) {
        return <div>Error...</div>;
    }

    if (billboards.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <BillboardClient data={billboards.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default BillboardsPage;
