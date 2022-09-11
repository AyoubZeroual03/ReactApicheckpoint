import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return { data, error, loading };
};

export default useFetch;
