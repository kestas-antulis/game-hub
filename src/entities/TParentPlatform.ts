import { TPlatform } from "@/entities/TPlatform";

type TParentPlatform = {
  id: number;
  name: string;
  slug: string;
  platforms: TPlatform[];
};

export default TParentPlatform;
