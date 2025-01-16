import { useQuery } from "@tanstack/react-query";
import { TParentPlatform } from "./usePlatforms";
import ms from "ms";
import create from "@/services/apiClient";

export type TGame = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: { platform: TParentPlatform }[];
};

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
