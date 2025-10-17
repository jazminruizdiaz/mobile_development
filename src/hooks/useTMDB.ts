import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { TMDB_BASE_URL, TMDB_ACCESS_TOKEN } from '@env';

//DEFINIENDO CLIENTE AXIOS, PARA EVITAR DRY

const tmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

interface useTMDBResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useTMDB = <T>(
  endpoint: string,
  params: Record<string, any> = {},
): useTMDBResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await tmdbClient.get<T>(endpoint, { params });
      setData(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        const message = err.response?.data?.status_message || err.message;
        setError(`TMDB error: ${message}`);
      } else {
        setError('Unexpected error');
      }
      console.error('API call failed:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [endpoint, params]);
 
return { data, loading, error };
};

