import useGenres from "@/hooks/useGenres";
import { Skeleton, Text } from "@chakra-ui/react";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      {genres &&
        genres.results.map((genre) => (
          <Skeleton isLoaded={!isLoading}>
            <Text>{genre.name}</Text>
          </Skeleton>
        ))}
    </>
  );
}

export default GenreList;
