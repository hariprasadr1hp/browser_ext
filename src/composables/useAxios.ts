import { shallowRef, Ref, computed } from 'vue';
import axios, { AxiosRequestConfig, RawAxiosResponseHeaders } from 'axios';

export interface UseAxiosReturn<T> {
  data: Ref<T | null>;
  error: Ref<Error | null>;
  loading: Ref<boolean>;
  status: Ref<number | null>;
  headers: Ref<RawAxiosResponseHeaders | null>;
  duration: Ref<number | null>;
  requestUrl: Ref<string>;
  requestMethod: Ref<string>;
  requestData: Ref<any>;
  isFetching: Ref<boolean>;
  timestamp: Ref<number | null>;
  isSuccess: Ref<boolean>;
  refetch: () => Promise<void>;
}

export default function useAxios<T>(url: string, config: AxiosRequestConfig = {}): UseAxiosReturn<T> {
  const data = shallowRef<T | null>(null);
  const error = shallowRef<Error | null>(null);
  const loading = shallowRef(true);
  const status = shallowRef<number | null>(null);
  const headers = shallowRef<RawAxiosResponseHeaders | null>(null);
  const duration = shallowRef<number | null>(null);
  const requestUrl = shallowRef(url);
  const requestMethod = shallowRef(config.method || 'GET');
  const requestData = shallowRef(config.data || null);
  const isFetching = shallowRef(false);
  const timestamp = shallowRef<number | null>(null);
  const isSuccess = shallowRef(false);

  const fetchData = async () => {
    loading.value = true;
    isFetching.value = true;
    const startTime = performance.now();
    try {
      const response = await axios.request<T>({
        url: requestUrl.value,
        method: requestMethod.value,
        headers: config.headers,
        params: config.params,
        data: requestData.value,
        ...config,
      });
      data.value = response.data;
      status.value = response.status;
      headers.value = response.headers as RawAxiosResponseHeaders;
      duration.value = performance.now() - startTime;
      timestamp.value = Date.now();
      isSuccess.value = true;
    } catch (err) {
      error.value = err as Error;
      if (axios.isAxiosError(err) && err.response) {
        status.value = err.response.status;
      } else {
        status.value = null;
      }
      isSuccess.value = false;
    } finally {
      loading.value = false;
      isFetching.value = false;
    }
  };

  const lazyStatus = computed(() => status.value);
  const lazyHeaders = computed(() => headers.value);
  const lazyDuration = computed(() => duration.value);
  const lazyTimestamp = computed(() => timestamp.value);
  const lazyIsSuccess = computed(() => isSuccess.value);

  fetchData();

  return {
    data,
    error,
    loading,
    status: lazyStatus,
    headers: lazyHeaders,
    duration: lazyDuration,
    requestUrl,
    requestMethod,
    requestData,
    isFetching,
    timestamp: lazyTimestamp,
    isSuccess: lazyIsSuccess,
    refetch: fetchData
  };
}
