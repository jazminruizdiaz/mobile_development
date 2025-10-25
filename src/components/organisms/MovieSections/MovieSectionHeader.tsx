import { View } from 'react-native';
import { TextCustom } from '../../atoms/Text/TextCustom';
import { styles } from './styles';
import { Button } from '../../atoms/Button/Button';
import { useThemedColors } from '../../../hooks/useThemedColors';

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
  const colors = useThemedColors();
  return (
    <View style={styles.row}>
      <TextCustom style={{ color: colors.textPrimary }} variant="subtitle">
        {title}
      </TextCustom>
      <Button
        title={actionLabel}
        onPress={onSeeMore}
        variant="custom"
        style={styles.customButton}
        textStyle={[styles.customButtonText, { color: colors.primary }]}
      />
    </View>
  );
};
