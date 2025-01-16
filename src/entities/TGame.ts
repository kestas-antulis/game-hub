import { TParentPlatform } from "@/entities/TParentPlatform";

export type TGame = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: { platform: TParentPlatform }[];
};
