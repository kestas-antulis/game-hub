import apiClient from "@/services/apiClient";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type TGame = {
  id: number;
  name: string;
  metacritic: number;
};

type TGamesResponse = {
  count: number;
  results: TGame[];
};

function GameGrid() {
  const [games, setGames] = useState<TGamesResponse>({ count: 0, results: [] });
  const [error, setSerror] = useState("");
  useEffect(() => {
    apiClient
      .get<TGamesResponse>("/games")
      .then((response) => {
        setGames(response.data);
        console.log(games);
      })
      .catch((err) => setSerror(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.results.map(
          (game) => game.metacritic > 90 && <li key={game.id}>{game.name}</li>
        )}
      </ul>
    </>
  );
}

export default GameGrid;
