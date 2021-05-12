import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPeople(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [url]);
  useEffect(() => {
    getData();
  }, [url, getData]);

  return { people, isLoading };
};
