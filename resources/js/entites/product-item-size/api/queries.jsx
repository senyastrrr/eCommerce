import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _queryKey, _root } from "./config";

export function useProductItemSize(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useSizesByProductId(id) {
    return useQuery({
        queryKey: [`${_queryKey}-by-product-id`, id],
        queryFn: () => get(`${_root}/get-sizes-by-product-id/${id}`)
    })
}

export function useProductItemSizeDetails(id) {
    return useQuery({
        queryKey: [`${_queryKey}-details`, id],
        queryFn: () => get(`${_root}/${id}/details`)
    })
}

export function useProductItemSizeByProductAndSize(id, size) {
    return useQuery({
        queryKey: [`${_queryKey}-by-product-and-size`, id, size],
        queryFn: () => get(`${_root}/get-by-product-and-size/${id}/${size}`)
    })
}

export function useProductItemSizes() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
