import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import {
  HStack,
  List,
  ListItem,
  Skeleton,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres &&
          genres.results.map((genre) => (
            <Skeleton isLoaded={!isLoading} key={genre.id}>
              <ListItem paddingY="5px">
                <HStack className="group">
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImageUrl(genre.image_background)}
                    transition="transform 0.25s ease"
                    _groupHover={{ transform: "scale(1.2)" }}
                  />
                  <Button
                    size="md"
                    variant="plain"
                    padding="8px"
                    _groupHover={{ textDecoration: "underline" }}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            </Skeleton>
          ))}
      </List>
    </>
  );
}

export default GenreList;
