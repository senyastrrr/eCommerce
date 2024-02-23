import axios from 'axios';

const API_URL = window.location.origin;

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: `${API_URL}/api`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 429) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return this.api.request(error.config);
        }
        return Promise.reject(error);
      }
    );
  }

  async get(endpoint) {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Ошибка GET запроса:', error);
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка POST запроса:', error);
      throw error;
    }
  }

  async put(endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка PUT запроса:', error);
      throw error;
    }
  }

  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error('Ошибка DELETE запроса:', error);
      throw error;
    }
  }
}

export default new ApiService();
