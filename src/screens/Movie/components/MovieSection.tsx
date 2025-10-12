import { View } from 'react-native';
import { SectionHeader } from './SectionHeader';

type Props = {
  title: string;
  actionLabel: string;
  onActionPress: () => void;
};

export const MovieSection = ({ title, actionLabel, onActionPress }: Props) => {
  return (
    <View>
      <SectionHeader
        title={title}
        actionLabel={actionLabel}
        onActionPress={onActionPress}
      />
    </View>
  );
};
