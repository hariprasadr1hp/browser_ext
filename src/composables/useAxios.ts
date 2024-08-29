import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ref, Ref } from 'vue';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export function useAxios<T = unknown>() {
  const data: Ref<T | null> = ref(null);
  const error: Ref<string | null> = ref(null);
  const loading: Ref<boolean> = ref(false);

  const request = async (config: AxiosRequestConfig): Promise<AxiosResponse<T> | void> => {
    loading.value = true;
    error.value = null;

    try {
      const response: AxiosResponse<T> = await axiosInstance.request<T>(config);
      data.value = response.data;
      return response;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        error.value = err.message;
      } else if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = 'An unknown error occurred';
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    request
  };
}
