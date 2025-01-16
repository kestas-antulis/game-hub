import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import create from "@/services/apiClient";
import TTrailer from "../entities/TTrailer";
import { TResponse } from "@/entities/TResponse";

function useTrailers(slug: string) {
  const apiClient = create<TResponse<TTrailer>>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: () => {
      const { request } = apiClient.getAll();
      return request.then((response) => response.data);
    },
    staleTime: ms("6h"),
  });
}

export default useTrailers;
