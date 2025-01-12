import { TGame } from "@/services/gameService";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import IconPlatformList from "./IconPlatformList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/imageUrl";

type TProps = {
  key: number;
  game: TGame;
};

function GameCard({ key, game }: TProps) {
  return (
    <Card key={key} borderRadius="10px" overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit="cover"
        objectPosition="top"
        height="60%"
      />
      <CardBody>
        <Heading fontSize="2xl" marginBottom="10px">
          {game.name}
        </Heading>
        <HStack justifyContent="space-between">
          <IconPlatformList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
