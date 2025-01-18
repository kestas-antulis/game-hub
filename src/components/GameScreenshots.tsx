import useScreenshots from "@/hooks/useScreenshots";
import { Image, Spinner } from "@chakra-ui/react";

type TProps = {
  gameSlug: string;
  maxImageCount: number;
};

function GameScreenshots({ gameSlug, maxImageCount }: TProps) {
  const { data: screenshots, isLoading, error } = useScreenshots(gameSlug);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <>
      {screenshots?.results.map((screenshot, index) => {
        if (index < maxImageCount) {
          return (
            <Image
              key={screenshot.id}
              src={screenshot.image}
              objectFit="cover"
              transition="transform 0.15s"
              cursor="pointer"
              _hover={{ transform: "scale(1.02)" }}
            />
          );
        }
      })}
    </>
  );
}

export default GameScreenshots;
