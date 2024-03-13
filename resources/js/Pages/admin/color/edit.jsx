import { ColorForm } from "@/entites/color";
import { useColor } from "@/entites/color/api/queries";

const EditColorPage = ({ id }) => {
    const Color = useColor(id);

    if (Color.isLoading) {
        return <div>Loading...</div>;
    }
    if (Color.isError) {
        return <div>Error...</div>;
    }

    if (Color.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorForm initialData={Color.data} />
            </div>
        </div>
    );
    }
}

export default EditColorPage;