import { usePromotions, PromotionClient } from "@/entites/promotion"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function PromotionsPage() {

    const Promotions = usePromotions();

    if (Promotions.isLoading) {
        return <div>Loading...</div>;
    }
    if (Promotions.isError) {
        return <div>Error...</div>;
    }

    if (Promotions.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <PromotionClient data={Promotions.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default PromotionsPage;
