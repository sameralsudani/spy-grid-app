//useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError("");
    axios
      .get(url)
      .then((res: any) => {
        setLoading(false);
        setData(res.data.results[0]);
      })
      .catch((err: any) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data, loading, error };
}
