import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import IconPlatformList from "./IconPlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/imageUrl";
import { Link } from "react-router-dom";
import { TGame } from "@/entities/TGame";

type TProps = {
  game: TGame;
};

function GameCard({ game }: TProps) {
  return (
    <Box
      transition="transform 0.25s ease"
      _hover={{ transform: "scale(1.05)" }}
      height="100%"
      className="group"
      borderRadius="10px"
      overflow="hidden"
    >
      <Card height="100%">
        <Link to={`/games/${game.slug}`}>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            title={game.name}
            cursor="pointer"
            objectFit="cover"
            objectPosition="top"
            overflow="hidden"
          />
        </Link>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom="10px">
            <IconPlatformList
              platforms={game.parent_platforms?.map(({ platform }) => platform)}
            />
            <HStack>
              {game.rating && <CriticScore score={game.rating} />}
              {game.metacritic && <CriticScore score={game.metacritic} />}
            </HStack>
          </HStack>

          <Heading fontSize="2xl">
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
}

export default GameCard;
