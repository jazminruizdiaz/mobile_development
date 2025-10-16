import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Button } from '../../../../components/atoms/Button/Button';

type Props = {
  genres: string[];
  active: string;
  onChange: (genre: string) => void;
  top: number;
};

export const GenresBar = ({ genres, active, onChange, top }: Props) => {
  return (
    <View style={[styles.genresBarContainer, { top }]}>
      <View style={styles.genresBar}>
        {genres.map(genre => {
          const isActive = genre === active;
          return (
            <Button
              key={genre}
              title={genre}
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
