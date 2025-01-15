import { TGameQuery } from "@/App";
import { TParentPlatform } from "./usePlatforms";
import useInfiniteData from "./useInfiniteData";

export type TGame = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: { platform: TParentPlatform }[];
};

function useGames(gameQuery: TGameQuery) {
  return useInfiniteData<TGame>("/games", "games", {
    params: {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.order,
      search: gameQuery.searchText,
    },
  });
}

export default useGames;
