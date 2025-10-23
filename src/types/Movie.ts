<<<<<<< HEAD
export type Genre = {
  id: number;
  name: string;
};

=======
>>>>>>> 8e29b90ef1986ca26df28b7c5727ade57b8921d4
export const DEFAULT_GENRE = 'all';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
<<<<<<< HEAD
  genre_ids: number[];
=======
  genre_ids?: number[];
>>>>>>> 8e29b90ef1986ca26df28b7c5727ade57b8921d4
}
