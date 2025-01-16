import { TPlatform } from "@/entities/TPlatform";

export type TParentPlatform = {
  id: number;
  name: string;
  slug: string;
  platforms: TPlatform[];
};
