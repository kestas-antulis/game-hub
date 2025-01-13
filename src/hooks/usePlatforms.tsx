import useData from "./useData";

type TPlatform = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

function usePlatforms() {
  return useData<TPlatform>("/platforms/lists/parents");
}

export default usePlatforms;
