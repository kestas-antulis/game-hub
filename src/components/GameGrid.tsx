import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
  const {
    data: games,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    games?.pages.reduce((reducer, page) => {
      return page.results.length + reducer;
    }, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<p>{isFetchingNextPage ? "Loading..." : "Show More"}</p>}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          marginTop={{ base: "0", sm: "20px" }}
          padding={5}
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
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
