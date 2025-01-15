import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

function GameHeading() {
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );
  const selectedPlatform = usePlatform(selectedPlatformId);

  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const searchText = useGameQueryStore((store) => store.gameQuery.searchText);

  return (
    <Heading as="h1" marginBottom="20px">
      {selectedPlatform?.name} {selectedGenre?.name} Games{" "}
      {searchText ? `: "${searchText}"` : ""}
    </Heading>
  );
}

export default GameHeading;
