import { deleteRequest, post, put } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { _root, _queryKey } from "./config";

export function useCreateOrder() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => post(_orderRoot, data),
        onSettled: async (_, error) => {
            if (error)
                console.log("error");
            else
                await queryClient.invalidateQueries({ queryKey: [_orderQueryKey] })
        }
    })
}

export function useUpdateOrder() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => put(`${_orderRoot}/${data.id}`, data),
        onSettled: async (_, error, variables) => {
            if (error)
                console.log(error);
            else {
                await queryClient.invalidateQueries({ queryKey: [_orderQueryKey] });
            }
        }
    })
}

export function useDeleteOrder() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteRequest(`${_orderRoot}/${id}`),
        onSettled: async (_, error) => {
            if (error)
                console.log(error);
            else
                await queryClient.invalidateQueries({ queryKey: [_orderQueryKey] })
        }
    })
}
