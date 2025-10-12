import { View } from 'react-native';
import { MovieSection } from './MovieSection';
import { styles } from './styles';

type SectionContent = {
  title: string;
  actionLabel: string;
  onActionPress: () => void;
};

type Props = {
  sections: SectionContent[];
};

export const SectionsList = ({ sections }: Props) => {
  return (
    <View style={styles.sectionsList}>
      {sections.map(section => (
        <MovieSection
          key={section.title}
          title={section.title}
          actionLabel={section.actionLabel}
          onActionPress={section.onActionPress}
        />
      ))}
    </View>
  );
};
