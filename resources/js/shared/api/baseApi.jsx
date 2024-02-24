import axios from 'axios';

const API_URL = window.location.origin;

export const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});