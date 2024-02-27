import { deleteRequest, post, put } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateBanner() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => post("/billboards", data),
        onMutate: () => {
            console.log("mutate");
        },
        onError: () => {
            console.log("error");
        },
        onSuccess: () => {
            console.log("success");
        },
        onSettled: async (_, error) => {
            console.log("settled");
            if (error)
                console.log("error");
            else
                await queryClient.invalidateQueries({ queryKey: ["billboards"] })
        }
    })
}

export function useUpdateBanner() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => put(`/billboards/${data.id}`, data),
        onSettled: async (_, error, variables) => {
            if (error)
                console.log(error);
            else {
                console.log("settled");
                await queryClient.invalidateQueries({ queryKey: ["billboards"] });
            }
        }
    })
}

export function useDeleteBanner() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteRequest(`billboards/${id}`),
        onSuccess: () => {
            console.log("deleted successfully");
        },
        onSettled: async (_, error) => {
            if (error)
                console.log(error);
            else
                await queryClient.invalidateQueries({ queryKey: ["billboards"] })
        }
    })
}

