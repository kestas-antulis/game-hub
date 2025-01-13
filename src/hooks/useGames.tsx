import { TGameQuery } from "@/App";
import useData from "./useData";

export type TParentPlatform = {
  id: number;
  name: string;
  slug: string;
};

export type TGame = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: { platform: TParentPlatform }[];
};

function useGames(gameQuery: TGameQuery) {
  return useData<TGame>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
}

export default useGames;
