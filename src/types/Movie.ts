export type Genre = {
  id: number;
  name: string;
};

export const DEFAULT_GENRE = 'all';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}
