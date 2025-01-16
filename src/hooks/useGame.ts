import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import create from "@/services/apiClient";
import { TGame } from "../entities/TGame";

function useGame(slug: string) {
  const apiClient = create<TGame>(`/games`);

  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => {
      const { request } = apiClient.get(slug);
      return request.then((response) => response.data);
    },
    staleTime: ms("6h"),
  });
}

export default useGame;
