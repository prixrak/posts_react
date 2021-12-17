import { useState } from "react";

export const useFetching = (fetchFunc) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetcing = async () => {
    try {
      setIsLoading(true);
      await fetchFunc();
    } catch(e) {
        setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetcing, isLoading, error];
}