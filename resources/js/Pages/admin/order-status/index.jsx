import { useOrderStatuses, OrderStatusClient } from "@/entites/order-status"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function OrderStatussPage() {

    const OrderStatuses = useOrderStatuses();

    if (OrderStatuses.isLoading) {
        return <div>Loading...</div>;
    }
    if (OrderStatuses.isError) {
        return <div>Error...</div>;
    }

    if (OrderStatuses.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <OrderStatusClient data={OrderStatuses.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default OrderStatussPage;
