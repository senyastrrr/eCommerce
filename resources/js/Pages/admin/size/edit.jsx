import { SizeForm } from "@/entites/size";
import { useSize } from "@/entites/size/api/queries";

const EditSizePage = ({ id }) => {
    const Size = useSize(id);

    if (Size.isLoading) {
        return <div>Loading...</div>;
    }
    if (Size.isError) {
        return <div>Error...</div>;
    }

    if (Size.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizeForm initialData={Size.data} />
            </div>
        </div>
    );
    }
}

export default EditSizePage;