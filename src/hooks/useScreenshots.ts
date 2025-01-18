import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import create from "@/services/apiClient";
import TResponse from "@/entities/TResponse";
import TScreenshot from "@/entities/TScreenshot";

function useScreenshots(slug: string) {
  const apiClient = create<TResponse<TScreenshot>>(
    `/games/${slug}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => {
      const { request } = apiClient.getAll();
      return request.then((response) => response.data);
    },
    staleTime: ms("6h"),
  });
}

export default useScreenshots;
