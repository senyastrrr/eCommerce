import { OrderStatusForm } from "@/entites/order-status";

const CreateOrderStatusPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderStatusForm/>
            </div>
        </div>
    );
}

export default CreateOrderStatusPage;