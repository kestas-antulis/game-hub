import { Show, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { TGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { TParentPlatform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export type TGameQuery = {
  genre: TGenre | null;
  platform: TParentPlatform | null;
  order: string;
};

function App() {
  const [gameQuery, setGameQuery] = useState<TGameQuery>({} as TGameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      justifyContent="center"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5" maxWidth="300px">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            activeGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" maxWidth="1280px">
        <HStack
          spacing={5}
          padding={{
            base: "10px",
            sm: "20px",
            md: "20px",
            lg: "20px",
            "2xl": "0",
          }}
        >
          <PlatformSelector
            activePlatform={gameQuery.platform}
            onActivePlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortSelector={gameQuery.order}
            onSelectSortOrder={(order) => setGameQuery({ ...gameQuery, order })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
