import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} padding="10px">
        {games.results.map((game) => (
          <Skeleton isLoaded={!isLoading} fadeDuration={1}>
            <GameCard key={game.id} game={game} />
          </Skeleton>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
