import genres from "../data/genres";

export type TGenre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

function useGenres() {
  return {
    data: { count: genres.length, results: genres },
    isLoading: false,
    error: null,
  };
}

export default useGenres;
