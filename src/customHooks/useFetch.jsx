import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
