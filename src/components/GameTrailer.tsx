import useTrailers from "@/hooks/useTrailers";

type TProps = {
  gameSlug: string;
};

function GameTrailer({ gameSlug }: TProps) {
  const { data: trailers, isLoading, error } = useTrailers(gameSlug);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <video
        controls
        width="480"
        src={trailers?.results[0]?.data[480]}
        poster={trailers?.results[0]?.preview}
      />
    </>
  );
}

export default GameTrailer;
