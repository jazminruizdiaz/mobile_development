import { DropdownOptions } from '../components/atoms/Dropdown/Dropdown';
import { useGenres } from './useGenres';
export const useGenresOptions = () => {
  const { data: genreData, loading, error } = useGenres();

  const genreOptions: DropdownOptions[] = [
    { label: 'All', value: 'all' },
    ...(genreData?.genres.map(genre => ({
      label: genre.name,
      value: genre.id.toString(),
    })) ?? []),
  ];

  return { genreOptions, loading, error };
};
