import apiClient from "./apiClient";

class httpService {
  constructor(public endpoint: string) {}

  getAll = <T>() => {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  };
}

const create = (endpoint: string) => new httpService(endpoint);

export default create;
