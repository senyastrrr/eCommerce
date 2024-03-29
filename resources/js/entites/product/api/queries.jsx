import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _queryKey, _root } from "./config";

export function useProduct(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useDiscountedProducts(){
    return useQuery({
        queryKey: [`discounted-${_queryKey}`],
        queryFn: () => get(`discounted-products`),
        refetchOnWindowFocus: false,
    });
}

export function useFeaturedProducts(){
    return useQuery({
        queryKey: [`featured-${_queryKey}`],
        queryFn: () => get(`featured-products`),
        refetchOnWindowFocus: false,
    });
}

export function useProductColors(id) {
    return useQuery({
        queryKey: [`${_queryKey}-colors` , id],
        queryFn: () => get(`${_root}/get-product-colors/${id}`)
    })
}

export function useProducts() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
