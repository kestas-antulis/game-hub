import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          lg: `minmax(300px, auto) 1fr`,
        }}
        templateAreas={{
          base: "main",
          lg: `"aside main"`,
        }}
        justifyContent="center"
        maxWidth="1440px"
      >
        <Show above="lg">
          <GridItem area="aside" paddingX="5" maxWidth="300px">
            <GenreList />
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
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
