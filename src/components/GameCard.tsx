import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import IconPlatformList from "./IconPlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/imageUrl";
import { TGame } from "@/hooks/useGames";

type TProps = {
  key: number;
  game: TGame;
};

function GameCard({ key, game }: TProps) {
  return (
    <Card key={key} borderRadius="10px" overflow="hidden" height="100%">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        title={game.name}
        cursor="pointer"
        objectFit="cover"
        objectPosition="top"
        overflow="hidden"
        transition="transform 0.25s ease"
        _hover={{ transform: "scale(1.1)" }}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom="10px">
          <IconPlatformList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
