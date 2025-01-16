import { TParentPlatform } from "./usePlatforms";
import useInfiniteData from "./useInfiniteData";
import useGameQueryStore from "@/store";

export type TGame = {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: { platform: TParentPlatform }[];
};

function useGames() {
  const gameQuery = useGameQueryStore((store) => store.gameQuery);
  return useInfiniteData<TGame>("/games", "games", {
    params: {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  });
}

export default useGames;
