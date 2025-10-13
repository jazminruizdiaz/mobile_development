import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './styles';

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
            <Pressable
              key={genre}
              onPress={() => onChange(genre)}
              style={[styles.genre, isActive && styles.genreActive]}
            >
              <Text
                style={[styles.genreLabel, isActive && styles.genreLabelActive]}
              >
                {genre}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
