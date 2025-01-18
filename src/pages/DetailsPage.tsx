import ExpandableText from "@/components/ExpandableTExt";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid padding={6} columns={2} gap={2}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <SimpleGrid columns={2} gap={3}>
          <GameScreenshots gameSlug={game.slug} maxImageCount={10} />
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
}

export default DetailsPage;
