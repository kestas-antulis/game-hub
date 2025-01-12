import { Badge } from "@chakra-ui/react";

type TProps = {
  score: number;
};

function CriticScore({ score }: TProps) {
  const scoreColor = score < 50 ? "red" : score < 75 ? "yellow" : "green";
  return (
    <>
      <Badge fontSize="14px" borderRadius="4" colorScheme={scoreColor}>
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
