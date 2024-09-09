import ky from 'ky';
import { useEffect, useState } from 'react';

interface Options {
  sleep: number | null;
}

export const useFetch = <T>(url: string, options?: RequestInit, otherOptions?: Options) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Sleep for fake loading
        if (otherOptions && otherOptions.sleep) {
          await new Promise((resolve) => setTimeout(resolve, otherOptions.sleep as number));
        }

        const response = await ky(url, options).json<T>();
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return { data, error, loading };
};
