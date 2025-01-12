import useData from "./useData";

export type TGenre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

function useGenres() {
  return useData<TGenre>("/genres");
}

export default useGenres;
