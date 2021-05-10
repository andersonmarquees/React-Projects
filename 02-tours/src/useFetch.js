import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [url]);
  useEffect(() => {
    getTours();
  }, [url, getTours]);
  return { tours, loading, setTours, getTours };
};
