import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPerson = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data.results);
      isLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [url, isLoading]);

  useEffect(() => {
    getPerson();
  }, [url, getPerson]);

  return { isLoading, person, isError, getPerson };
};
