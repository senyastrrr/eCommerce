import { PromotionForm } from "@/entites/promotion";
import { usePromotion } from "@/entites/promotion/api/queries";

const EditPromotionPage = ({ id }) => {
    const Promotion = usePromotion(id);

    if (Promotion.isLoading) {
        return <div>Loading...</div>;
    }
    if (Promotion.isError) {
        return <div>Error...</div>;
    }

    if (Promotion.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <PromotionForm initialData={Promotion.data} />
            </div>
        </div>
    );
    }
}

export default EditPromotionPage;