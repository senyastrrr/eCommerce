import { get } from "@/shared/api"
import { useQueries, useQuery } from "@tanstack/react-query"

export function useBillboards() {
    return useQuery({
        queryKey: ["billboards"],
        queryFn: () => get("/billboards"),
        refetchOnWindowFocus: false,
    });
}
