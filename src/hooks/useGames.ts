import useInfiniteData from "./useInfiniteData";
import useGameQueryStore from "@/store";
import { TGame } from "../entities/TGame";

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
