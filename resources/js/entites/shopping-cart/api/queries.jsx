import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _queryKey, _root } from "./config";

export function useShoppingCart(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useShoppingCartByUserId(id) {
    return useQuery({
        queryKey: [`${_queryKey}-by-user`, id],
        queryFn: () => get(`${_root}/get-by-user-id/${id}`)
    })
}


export function useShoppingCarts() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
