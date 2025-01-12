import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import {
  HStack,
  List,
  ListItem,
  Skeleton,
  Text,
  Image,
} from "@chakra-ui/react";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres &&
          genres.results.map((genre) => (
            <Skeleton isLoaded={!isLoading}>
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                    transition="transform 0.25s ease"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                  <Text fontSize="lg">{genre.name}</Text>
                </HStack>
              </ListItem>
            </Skeleton>
          ))}
      </List>
    </>
  );
}

export default GenreList;
