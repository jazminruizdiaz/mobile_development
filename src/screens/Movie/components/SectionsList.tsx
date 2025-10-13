import { View } from 'react-native';
import { MovieSection } from './MovieSection';
import { styles } from './styles';
import { SectionContent } from '../../../types/Section';

type Props = {
  sections: SectionContent[];
};

export const SectionsList = ({ sections }: Props) => {
  return (
    <View style={styles.sectionsList}>
      {sections.map(item => (
        <MovieSection
          key={item.title}
          title={item.title}
          actionLabel={item.actionLabel}
          onActionPress={item.onActionPress}
          type={item.type}
          companyId={item.companyId}
          genreId={item.genreId}
        />
      ))}
    </View>
  );
};
