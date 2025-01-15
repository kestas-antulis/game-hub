import useData from "./useData";
import genres from "@/data/genres";

export type TGenre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

function useGenres() {
  return useData<TGenre>("/genres", "genres", genres);
}

export default useGenres;
