import { View } from 'react-native';
import { TextCustom } from '../../../../components/atoms/Text/TextCustom';
import { createStyles } from './styles';
import { Button } from '../../../../components/atoms/Button/Button';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';

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
  const { themeMode } = useTheme();
      const colors = getThemeColors(themeMode);
      const styles = createStyles(colors);
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
