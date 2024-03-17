import { BillboardForm } from "@/entites/billboard";
import { useBillboard } from "@/entites/billboard/api/queries";

const EditBillboardPage = ({ id }) => {
    const billboard = useBillboard(id);

    if (billboard.isLoading) {
        return <div>Loading...</div>;
    }
    if (billboard.isError) {
        return <div>Error...</div>;
    }

    if (billboard.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <BillboardForm initialData={billboard.data} />
                </div>
            </div>
        );
    }
}

export default EditBillboardPage;