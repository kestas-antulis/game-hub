import useData from "./useData";

type TPlatform = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

export type TParentPlatform = {
  id: number;
  name: string;
  slug: string;
  platforms: TPlatform[];
};

function usePlatforms() {
  return useData<TParentPlatform>("/platforms/lists/parents", "platforms");
}

export default usePlatforms;
