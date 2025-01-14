import create, { TResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

function useData<T>(
  endpoint: string,
  queryKey: string,
  requestConfig?: AxiosRequestConfig
) {
  const apiClient = create<TResponse<T>>(endpoint);

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      const { request } = apiClient.getAll(requestConfig);
      return request.then((response) => response.data);
    },
  });
}

export default useData;
