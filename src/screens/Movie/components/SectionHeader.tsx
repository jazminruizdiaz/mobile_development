import { View } from 'react-native';
import { TextCustom } from '../../../components/atoms/Text/TextCustom';
import { styles } from './styles';

type Props = {
  title: string;
  actionLabel: string;
  onActionPress: () => void;
};

export const SectionHeader = ({ title, actionLabel, onActionPress }: Props) => {
  return (
    <View style={styles.row}>
      <TextCustom style={styles.title} variant="subtitle">
        {title}
      </TextCustom>
      <TextCustom style={styles.actionLabel} variant="body">
        {actionLabel}
      </TextCustom>
    </View>
  );
};
