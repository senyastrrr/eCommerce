import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"
import { _queryKey, _root } from "./config";

export function useReview(id) {
    return useQuery({
        queryKey: [_queryKey, id],
        queryFn: () => get(`${_root}/${id}`)
    })
}

export function useReviews() {
    return useQuery({
        queryKey: [_queryKey],
        queryFn: () => get(_root),
        refetchOnWindowFocus: false,
    });
}
