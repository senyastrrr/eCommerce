import { api } from "./baseApi"

export async function get(endpoint) {
  const response = await api.get(endpoint);
  return response.data;
}

export async function post(endpoint, data) {
  const response = await api.post(endpoint, data);
  return response.data;
}

export async function put(endpoint, data) {
  const response = await api.put(endpoint, data);
  return response.data;
}

export async function deleteRequest(endpoint) {
  const response = await api.delete(endpoint);
  return response.data;
}
