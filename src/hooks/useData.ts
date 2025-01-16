import create from "@/services/apiClient";
import { TResponse } from "@/entities/TResponse";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import ms from "ms";

function useData<T>(
  endpoint: string,
  queryKey: string,
  initialData?: TResponse<T>,
  requestConfig?: AxiosRequestConfig
) {
  const apiClient = create<TResponse<T>>(endpoint);

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      const { request } = apiClient.getAll(requestConfig);
      return request.then((response) => response.data);
    },
    initialData: {
      count: initialData?.count || 0,
      next: null,
      previous: null,
      results: initialData?.results as T[],
    },
    staleTime: ms("6h"),
  });
}

export default useData;
