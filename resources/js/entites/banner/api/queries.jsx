import { get } from "@/shared/api"
import { useQuery } from "@tanstack/react-query"

export function useBanner(id) {
    return useQuery({
        queryKey: ["/billboards", id],
        queryFn: () => get(`billboards/${id}`)
    })
}

export function useBanners() {
    return useQuery({
        queryKey: ["billboards"],
        queryFn: () => get("/billboards"),
        refetchOnWindowFocus: false,
    });
}
