import genreService, { TGenresResponse } from "@/services/genreService";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

function useGenres() {
  const [genres, setGenres] = useState<TGenresResponse>({
    count: 0,
    results: [],
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [seletcedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = genreService.getAll<TGenresResponse>();
    request
      .then((response) => {
        setGenres(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return {
    genres,
    setGenres,
    error,
    setError,
    isLoading,
    seletcedGenre,
    setSelectedGenre,
  };
}

export default useGenres;
