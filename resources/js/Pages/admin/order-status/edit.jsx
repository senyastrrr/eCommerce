import { OrderStatusForm, useOrderStatus } from "@/entites/order-status";

const EditOrderStatusPage = ({ id }) => {
    const OrderStatus = useOrderStatus(id);

    if (OrderStatus.isLoading) {
        return <div>Loading...</div>;
    }
    if (OrderStatus.isError) {
        return <div>Error...</div>;
    }

    if (OrderStatus.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <OrderStatusForm initialData={OrderStatus.data} />
                </div>
            </div>
        );
    }
}

export default EditOrderStatusPage;