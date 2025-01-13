import { Show, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { TGenre } from "./hooks/useGenres";

function App() {
  const [activeGenre, setActiveGenre] = useState<TGenre | null>(null);

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
            onSelectGenre={(genre) => {
              setActiveGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main" maxWidth="1280px">
        <GameGrid activeGenre={activeGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
