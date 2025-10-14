import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';
import axios, { AxiosError } from 'axios';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('TMDB API error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export const getMoviesByGenreId = async (genreId: number) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        with_genres: genreId,
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('TMDB API error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export const getMoviesByCompanyId = async (companyId: number) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        with_companies: companyId,
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('TMDB API error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export const getBestMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('TMDB API error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};
