import { TGame } from "@/services/gameService";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

type TProps = {
  game: TGame;
};

function GameCard({ game }: TProps) {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
