import create from "./httpService";

export type TGenres = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export type TGenresResponse = {
  count: number;
  results: TGenres[];
};

export default create("/genres");
