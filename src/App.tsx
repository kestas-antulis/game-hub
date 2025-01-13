import { Show, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { TGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { TParentPlatform } from "./hooks/useGames";

export type TGameQuery = {
  genre: TGenre | null;
  platform: TParentPlatform | null;
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
        <PlatformSelector
          activePlatform={gameQuery.platform}
          onActivePlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
