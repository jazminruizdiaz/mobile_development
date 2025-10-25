import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button } from '../../atoms/Button/Button';
import { Genre } from '../../../types/Movie';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  genres: Genre[];
  active: Genre;
  onChange: (genre: Genre) => void;
};

export const GenresBar = ({ genres, active, onChange }: Props) => {
  const insets = useSafeAreaInsets();
  const top = insets.top;

  return (
    <View style={[styles.genresBarContainer, { top }]}>
      <View style={styles.genresBar}>
        {genres.map(genre => {
          const isActive = genre.id === active.id;
          return (
            <Button
              key={genre.id}
              title={genre.name}
              onPress={() => onChange(genre)}
              variant="custom"
              style={[styles.genre, isActive && styles.genreActive]}
              textStyle={[
                styles.genreLabel,
                isActive && styles.genreLabelActive,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};
