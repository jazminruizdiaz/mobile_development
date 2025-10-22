import { DropdownOptions } from '../components/atoms/Dropdown/Dropdown';
import { useGenre } from './useGenre';

export const useGenreOptions = () => {
  const { data: genreData, loading, error } = useGenre();

  const genreOptions: DropdownOptions[] =
    genreData?.genres.map(genre => ({
      label: genre.name,
      value: genre.id.toString(),
    })) ?? [];

  return { genreOptions, loading, error };
};
