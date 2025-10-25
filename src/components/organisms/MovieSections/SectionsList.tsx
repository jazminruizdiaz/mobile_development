import { View } from 'react-native';
import { MovieSection } from './MovieSection';
import { styles } from './styles';
import { SectionCallbacks, SectionData } from '../../../types/Section';

type Props = {
  sections: SectionData[];
} & SectionCallbacks;

export const SectionsList = ({ sections, onSeeMore }: Props) => {
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
