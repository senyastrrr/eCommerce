import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _queryKey, _root } from "./config";

export function useCategory(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useCategories() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
