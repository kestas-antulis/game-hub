import gameService, { TGamesResponse } from "@/services/gameService";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGames] = useState<TGamesResponse>({ count: 0, results: [] });
  const [error, setSerror] = useState("");
  useEffect(() => {
    const { request, cancel } = gameService.getAll<TGamesResponse>();
    request
      .then((response) => {
        setGames(response.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setSerror(err.message);
      });

    return () => cancel();
  }, []);

  return { games, setGames, error, setSerror };
};

export default useGames;
