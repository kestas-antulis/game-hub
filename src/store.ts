import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

type GameQuery = {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
};

type GameQueryStore = {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformid: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        searchText,
      },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genreId,
      },
    })),
  setPlatformid: (platformId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformId,
      },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        sortOrder,
      },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Game Query Store", useGameQueryStore);
}

export default useGameQueryStore;
