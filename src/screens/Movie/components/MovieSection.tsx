import { View } from 'react-native';
import { MovieSectionHeader } from './MovieSectionHeader';

type Props = {
  title: string;
  actionLabel: string;
  onActionPress: () => void;
};

export const MovieSection = ({ title, actionLabel, onActionPress }: Props) => {
  return (
    <View>
      <MovieSectionHeader
        title={title}
        actionLabel={actionLabel}
        onActionPress={onActionPress}
      />
    </View>
  );
};
