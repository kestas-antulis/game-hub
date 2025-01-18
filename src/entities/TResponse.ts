type TResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export default TResponse;
