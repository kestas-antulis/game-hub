import { TGameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

type TProps = {
  gameQuery: TGameQuery;
};

function GameHeading({ gameQuery }: TProps) {
  const activePlatform = usePlatform(gameQuery.platformId);
  const activeGenre = useGenre(gameQuery.genreId);

  return (
    <Heading as="h1" marginBottom="20px">
      {activePlatform?.name} {activeGenre?.name} Games{" "}
      {gameQuery.searchText ? `: "${gameQuery.searchText}"` : ""}
    </Heading>
  );
}

export default GameHeading;
