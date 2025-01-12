import create from "./httpService";

export type TGame = {
  id: number;
  name: string;
  metacritic: number;
};

export type TGamesResponse = {
  count: number;
  results: TGame[];
};

export default create("/games");
