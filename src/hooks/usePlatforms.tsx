import useData from "./useData";

type TPlatform = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type TParentPlatform = {
  id: number;
  name: string;
  slug: string;
  platforms: TPlatform[];
};

function usePlatforms() {
  return useData<TParentPlatform>("/platforms/lists/parents");
}

export default usePlatforms;
