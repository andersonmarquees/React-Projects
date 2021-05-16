import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loremIpsum, setLoremIpsum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLoremIpsum = useCallback(async () => {
    try {
      const response = await fetch(url);
      const dataLorem = await response.json();
      setLoremIpsum(dataLorem);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    getLoremIpsum();
  }, [url, getLoremIpsum]);

  return { loremIpsum, isLoading };
};
