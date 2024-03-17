import { PromotionForm } from "@/entites/promotion";

const CreatePromotionPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <PromotionForm/>
            </div>
        </div>
    );
}

export default CreatePromotionPage;