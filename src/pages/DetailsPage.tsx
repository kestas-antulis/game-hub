import ExpandableText from "@/components/ExpandableText";
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
    <SimpleGrid
      paddingX={{ base: 3, lg: 6 }}
      paddingY={{ base: 2 }}
      columns={{ base: 1, lg: 2 }}
      spacing={3}
    >
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          <GameScreenshots gameSlug={game.slug} maxImageCount={10} />
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
}

export default DetailsPage;
