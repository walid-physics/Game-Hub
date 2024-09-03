import { useEffect, useState } from "react";
import apiClientGame from "../services/api-client-game";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T>{
    count: number;
    results : T[]
}

export const useData = <T>(endpoint : string, requestConfig ?: AxiosRequestConfig, deps?: any[]) => {
    
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClientGame
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};
