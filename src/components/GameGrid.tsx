import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.results.map(
          (game) => game.metacritic > 90 && <li key={game.id}>{game.name}</li>
        )}
      </ul>
    </>
  );
}

export default GameGrid;
