import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { TGameQuery } from "@/App";

type TProps = {
  gameQuery: TGameQuery;
};

function GameGrid({ gameQuery }: TProps) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  console.log(games);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        marginTop={{ base: "0", sm: "20px" }}
      >
        {games &&
          games.results.map((game) => (
            <Skeleton
              key={game.id}
              isLoaded={!isLoading}
              fadeDuration={1}
              borderRadius="10px"
            >
              <GameCard game={game} />
            </Skeleton>
          ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
