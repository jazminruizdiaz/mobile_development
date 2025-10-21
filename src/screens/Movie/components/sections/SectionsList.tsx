import { View } from 'react-native';
import { MovieSection } from './MovieSection';
import { createStyles } from './styles';
import { SectionCallbacks, SectionData } from '../../../../types/Section';
import { useTheme } from '../../../../contexts/Theme/ThemeContext';
import { getThemeColors } from '../../../../constants/colorsFun';

type Props = {
  sections: SectionData[];
} & SectionCallbacks;

export const SectionsList = ({ sections, onSeeMore }: Props) => {
  const { themeMode } = useTheme();
      const colors = getThemeColors(themeMode);
      const styles = createStyles(colors);
  return (
    <View style={styles.sectionsList}>
      {sections.map(item => (
        <MovieSection
          key={item.title}
          {...item}
          onSeeMore={() => onSeeMore(item)}
        />
      ))}
    </View>
  );
};
