import useData from "./useData";
import { TGenre } from "./useGenres";

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
  parent_platforms: { platform: TParentPlatform }[];
};

function useGames(activeGenre: TGenre | null) {
  return useData<TGame>("/games", { params: { genres: activeGenre?.id } }, [
    activeGenre?.id,
  ]);
}

export default useGames;
