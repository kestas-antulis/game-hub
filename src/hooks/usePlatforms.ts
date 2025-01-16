import platforms from "@/data/platforms";
import useData from "./useData";
import { TParentPlatform } from "../entities/TParentPlatform";

function usePlatforms() {
  return useData<TParentPlatform>(
    "/platforms/lists/parents",
    "platforms",
    platforms
  );
}

export default usePlatforms;
