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
  parent_platforms: { platform: TParentPlatform }[];
};

function useGames() {
  return useData<TGame>("/games");
}

export default useGames;
