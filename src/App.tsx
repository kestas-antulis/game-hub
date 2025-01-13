import { Show, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { TGenre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { TParentPlatform } from "./hooks/useGames";

function App() {
  const [activeGenre, setActiveGenre] = useState<TGenre | null>(null);
  const [activePlatform, setActivePlatform] = useState<TParentPlatform | null>(
    null
  );

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
            onSelectGenre={(genre) => setActiveGenre(genre)}
            activeGenre={activeGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" maxWidth="1280px">
        <PlatformSelector
          activePlatform={activePlatform}
          onActivePlatform={(platform) => setActivePlatform(platform)}
        />
        <GameGrid activePlatform={activePlatform} activeGenre={activeGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
