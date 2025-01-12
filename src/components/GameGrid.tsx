import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { data: games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding={{ sm: "20px", md: "20px", lg: "20px", "2xl": "0" }}
      >
        {games &&
          games.results.map((game) => (
            <Skeleton isLoaded={!isLoading} fadeDuration={1}>
              <GameCard key={game.id} game={game} />
            </Skeleton>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
