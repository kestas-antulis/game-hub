import create, { TResponse } from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

function useInfiniteData<T>(
  endpoint: string,
  queryKey: string,
  requestConfig?: AxiosRequestConfig
) {
  const apiClient = create<TResponse<T>>(endpoint);

  return useInfiniteQuery({
    queryKey: [queryKey, requestConfig],
    queryFn: ({ pageParam = 1 }) => {
      const { request } = apiClient.getAll({
        ...requestConfig,
        params: {
          ...requestConfig?.params,
          page: pageParam,
        },
      });

      return request.then((res) => {
        return res.data;
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
}
export default useInfiniteData;
