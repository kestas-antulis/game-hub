import { Show, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export type TGameQuery = {
  genreId?: number;
  platformId?: number;
  order: string;
  searchText: string;
};

function App() {
  const [gameQuery, setGameQuery] = useState<TGameQuery>({} as TGameQuery);

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        lg: `minmax(300px, auto) 1fr`,
      }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      justifyContent="center"
      maxWidth="1440px"
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5" maxWidth="300px">
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
            activeGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        maxWidth="1280px"
        padding={{
          base: "10px",
          sm: "20px",
          md: "20px",
          lg: "20px",
          "2xl": "0",
        }}
        justifySelf="stretch"
      >
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5}>
          <PlatformSelector
            activePlatformId={gameQuery.platformId}
            onActivePlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
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
