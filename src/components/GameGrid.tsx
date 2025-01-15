import { Button, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { TGameQuery } from "@/App";
import React from "react";

type TProps = {
  gameQuery: TGameQuery;
};

function GameGrid({ gameQuery }: TProps) {
  const {
    data: games,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        marginTop={{ base: "0", sm: "20px" }}
      >
        {games &&
          games.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <Skeleton
                  key={game.id}
                  isLoaded={!isFetching}
                  fadeDuration={1}
                  borderRadius="10px"
                >
                  <GameCard game={game} />
                </Skeleton>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Show More"}
        </Button>
      )}
    </>
  );
}

export default GameGrid;
