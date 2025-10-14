import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';
import axios, { AxiosError } from 'axios';

const apiClient = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    handleError(error);
  }
};

export const getMoviesByGenre = async (genreId: number) => {
  try {
    const response = await apiClient.get('/discover/movie', {
      params: {
        language: 'en-US',
        page: 1,
        with_genres: genreId,
        sort_by: 'popularity.desc',
      },
    });

    return response.data.results;
  } catch (error) {
    handleError(error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await apiClient.get('/discover/movie', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: unknown) => {
  if (error instanceof AxiosError) {
    console.error('TMDB API error:', error.response?.data || error.message);
  } else {
    console.error('Unexpected error:', error);
  }
  throw error;
};
