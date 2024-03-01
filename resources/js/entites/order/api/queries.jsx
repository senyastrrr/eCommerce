import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _orderQueryKey, _orderRoot, _orderLineQueryKey, _orderLineRoot, _orderStatusQueryKey, _orderStatusRoot } from "./config";

export function useOrder(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useOrders() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
