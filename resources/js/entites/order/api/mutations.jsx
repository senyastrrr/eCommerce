import { deleteRequest, post, put } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { _orderQueryKey, _orderRoot, _orderLineQueryKey, _orderLineRoot, _orderStatusQueryKey, _orderStatusRoot } from "./config";

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

export function useCreateOrderLine() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => post(_orderLineRoot, data),
        onSettled: async (_, error) => {
            if (error)
                console.log("error");
            else
                await queryClient.invalidateQueries({ queryKey: [_orderLineQueryKey] })
        }
    })
}

export function useUpdateOrderLine() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => put(`${_orderLineRoot}/${data.id}`, data),
        onSettled: async (_, error, variables) => {
            if (error)
                console.log(error);
            else {
                await queryClient.invalidateQueries({ queryKey: [_orderLineQueryKey] });
            }
        }
    })
}

export function useDeleteOrderLine() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteRequest(`${_orderLineRoot}/${id}`),
        onSettled: async (_, error) => {
            if (error)
                console.log(error);
            else
                await queryClient.invalidateQueries({ queryKey: [_orderLineQueryKey] })
        }
    })
}

export function useCreateOrderStatus() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => post(_orderStatusRoot, data),
        onSettled: async (_, error) => {
            if (error)
                console.log("error");
            else
                await queryClient.invalidateQueries({ queryKey: [_orderStatusQueryKey] })
        }
    })
}

export function useUpdateOrderStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => put(`${_orderStatusRoot}/${data.id}`, data),
        onSettled: async (_, error, variables) => {
            if (error)
                console.log(error);
            else {
                await queryClient.invalidateQueries({ queryKey: [_orderStatusQueryKey] });
            }
        }
    })
}

export function useDeleteOrderStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => deleteRequest(`${_orderStatusRoot}/${id}`),
        onSettled: async (_, error) => {
            if (error)
                console.log(error);
            else
                await queryClient.invalidateQueries({ queryKey: [_orderStatusQueryKey] })
        }
    })
}

