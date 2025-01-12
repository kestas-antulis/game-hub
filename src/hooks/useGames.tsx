import gameService, { TGamesResponse } from "@/services/gameService";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGames] = useState<TGamesResponse>({ count: 0, results: [] });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = gameService.getAll<TGamesResponse>();
    request
      .then((response) => {
        setGames(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
