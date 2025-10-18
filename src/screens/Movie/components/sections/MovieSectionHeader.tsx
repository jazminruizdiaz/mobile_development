import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { styles } from './styles';

type Props = {
  title: string;
  actionLabel: string;
  onSeeMore: () => void;
};

export const MovieSectionHeader = ({
  title,
  actionLabel,
  onSeeMore,
}: Props) => {
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
