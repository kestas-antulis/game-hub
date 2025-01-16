import axios, { AxiosRequestConfig } from "axios";

const client = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class ApiClient<T> {
  constructor(public endpoint: string) {}
  getAll = (requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    const request = client.get<T>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });

    return { request, cancel: () => controller.abort() };
  };

  get = (id: string | number, requestConfig?: AxiosRequestConfig) => {
    const controller = new AbortController();
    const request = client.get<T>(`${this.endpoint}/${id}`, {
      signal: controller.signal,
      ...requestConfig,
    });

    return { request, cancel: () => controller.abort() };
  };
}

const create = <T>(endpoint: string) => new ApiClient<T>(endpoint);

export default create;
