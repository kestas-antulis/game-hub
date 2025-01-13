import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { TGenre } from "@/hooks/useGenres";

type TProps = {
  activeGenre: TGenre | null;
};

function GameGrid({ activeGenre }: TProps) {
  const { data: games, error, isLoading } = useGames(activeGenre);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding={{ sm: "20px", md: "20px", lg: "20px", "2xl": "0" }}
        marginTop="20px"
      >
        {games &&
          games.results.map((game) => (
            <Skeleton key={game.id} isLoaded={!isLoading} fadeDuration={1}>
              <GameCard game={game} />
            </Skeleton>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
