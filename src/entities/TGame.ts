import TParentPlatform from "@/entities/TParentPlatform";
import TGenre from "./TGenre";
import TPublisher from "./TPublisher";

export type TGame = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating: number;
  genres: TGenre[];
  publishers: TPublisher[];
  parent_platforms: { platform: TParentPlatform }[];
};
