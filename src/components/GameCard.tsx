import { TGame } from "@/services/gameService";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import IconPlatformList from "./IconPlatformList";

type TProps = {
  key: number;
  game: TGame;
};

function GameCard({ key, game }: TProps) {
  return (
    <Card key={key} borderRadius="10px" overflow="hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        objectFit="cover"
        objectPosition="top"
        height="60%"
      />
      <CardBody>
        <Heading fontSize="2xl" marginBottom="10px">
          {game.name}
        </Heading>
        <IconPlatformList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
