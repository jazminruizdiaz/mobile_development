import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { styles } from './styles';
import { Button } from '../../../../components/atoms/Button/Button';

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
      <Button
        title={actionLabel}
        onPress={onSeeMore}
        variant="custom"
        style={styles.customButton}
        textStyle={styles.customButtonText}
      />
    </View>
  );
};
