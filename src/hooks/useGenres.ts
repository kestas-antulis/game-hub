import { TGenre } from "../entities/TGenre";
import useData from "./useData";
import genres from "@/data/genres";

function useGenres() {
  return useData<TGenre>("/genres", "genres", genres);
}

export default useGenres;
