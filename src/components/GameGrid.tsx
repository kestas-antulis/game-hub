import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} padding="10px">
        {games.results.map(
          (game) =>
            game.metacritic > 90 && <GameCard key={game.id} game={game} />
        )}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
