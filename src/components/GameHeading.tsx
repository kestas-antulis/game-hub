import { TGameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

type TProps = {
  gameQuery: TGameQuery;
};

function GameHeading({ gameQuery }: TProps) {
  return (
    <Heading as="h1" marginBottom="20px">
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games{" "}
      {gameQuery.searchText ? `: "${gameQuery.searchText}"` : ""}
    </Heading>
  );
}

export default GameHeading;
