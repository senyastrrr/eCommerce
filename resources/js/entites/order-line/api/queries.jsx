import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _root, _queryKey } from "./config";

export function useOrderLine(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useOrderLines() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
