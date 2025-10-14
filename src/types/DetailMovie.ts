import { Movie } from './Movie';

export interface DetailMovie extends Movie {
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  original_language: string;
  runtime: number;
}
