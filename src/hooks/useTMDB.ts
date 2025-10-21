import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { TMDB_BASE_URL, TMDB_ACCESS_TOKEN } from '@env';

const TMDBClient = axios.create({
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

type TMDBParams = {
  language?: string;
  page?: number;
  with_genres?: number;
  with_companies?: number;
  query?: string;
};

export const useTMDB = <T>(
  endpoint: string,
  params: TMDBParams = {},
  enabled = true,
): useTMDBResult<T> => {
  const {
    language = 'en-US',
    page = 1,
    with_genres,
    with_companies,
    query,
  } = params;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !endpoint) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const APIParams: Record<string, any> = { language, page };
        if (with_genres !== undefined) APIParams.with_genres = with_genres;
        if (with_companies !== undefined)
          APIParams.with_companies = with_companies;
        if (query !== undefined) APIParams.query = query;

        const response = await TMDBClient.get<T>(endpoint, {
          params: APIParams,
        });
        setData(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          const message = err.response?.data?.status_message || err.message;
          setError(`TMDB error: ${message}`);
        } else {
          setError('Unexpected error');
        }
        console.error('API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, language, page, with_genres, with_companies, enabled, query]);

  return { data, loading, error };
};
