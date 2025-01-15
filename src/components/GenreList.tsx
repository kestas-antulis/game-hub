import useGenres, { TGenre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import {
  HStack,
  List,
  ListItem,
  Skeleton,
  Text,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";

type TProps = {
  onSelectGenre: (genre: TGenre) => void;
  activeGenre: TGenre | null;
};

function GenreList({ onSelectGenre, activeGenre }: TProps) {
  const { data: genres, error, isFetching } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {error && <Text>{error.message}</Text>}
      <List>
        {genres &&
          genres.results.map((genre) => (
            <Skeleton isLoaded={!isFetching} key={genre.id}>
              <ListItem paddingTop="8px">
                <HStack className="group">
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                    title={genre.name}
                    transition="transform 0.25s ease"
                    _groupHover={{ transform: "scale(1.2)" }}
                  />
                  <Button
                    size="md"
                    variant="plain"
                    padding="8px"
                    onClick={() => onSelectGenre(genre)}
                    _groupHover={{ textDecoration: "underline" }}
                    fontWeight={
                      activeGenre?.id === genre.id ? "bold" : "normal"
                    }
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
