import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import IconPlatformList from "./IconPlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/imageUrl";
import { TGame } from "@/hooks/useGames";

type TProps = {
  game: TGame;
};

function GameCard({ game }: TProps) {
  return (
    <Card
      borderRadius="10px"
      overflow="hidden"
      height="100%"
      className="group"
      transition="transform 0.25s ease"
      _hover={{ transform: "translate(0, -10px)" }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        title={game.name}
        cursor="pointer"
        objectFit="cover"
        objectPosition="top"
        overflow="hidden"
        transition="transform 0.25s ease"
      />
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
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
