import { useBillboards, BillboardClient } from "@/entites/billboard"

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
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <BillboardClient data={billboards.data} />
                </div>
            </div>
        )
    }
}

export default BillboardsPage;
