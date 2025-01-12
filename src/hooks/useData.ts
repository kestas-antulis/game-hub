import create from "@/services/httpService";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

type TResponse<T> = {
  count: number;
  results: T[];
};

function useData<D>(endpoint: string) {
  const [data, setData] = useState<TResponse<D>>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const service = create(endpoint);
    const { request, cancel } = service.getAll<TResponse<D>>();
    request
      .then((response) => {
        setData(response.data);
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
    data,
    error,
    isLoading,
  };
}

export default useData;
