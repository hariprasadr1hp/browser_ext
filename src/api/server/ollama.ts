import axios, { AxiosRequestConfig } from "axios";

type Model = {
  "name": string,
  "model": string,
  "modified_at": string,
  "size": number,
  "digest": string,
  "details": {
    "parent_model": string,
    "format": string,
    "family": string,
    "families": string[],
    "parameter_size": string,
    "quantization_level": string
  }
}

type GetModelsResponse = {
  data: {
    models: Model[]
  }
}

export async function getModels(endpoint: string, config: AxiosRequestConfig) {
  try {
    const { data } = await axios.get<GetModelsResponse>(endpoint, config);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (`error message: ${error.message}`);
    } else {
      throw (`unexpected error: ${error}`);
    }
  }
}

const headers = {
  'Content-Type': 'application/json',
}

export const ollamaConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_OLLAMA_URL,
  headers: headers,
  timeout: 10000,
}
