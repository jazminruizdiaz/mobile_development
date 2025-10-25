import React from 'react';
import { CastMember } from '../../../../../types/MovieCast';
import { FlatList } from 'react-native';
import { CastItem } from './CastItem';

export const CastList = ({ cast }: { cast: CastMember[] }) => {
  return (
    <FlatList
      horizontal
      data={cast}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <CastItem member={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};
