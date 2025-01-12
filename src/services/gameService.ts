import create from "./httpService";

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

export type TGamesResponse = {
  count: number;
  results: TGame[];
};

export default create("/games");
