import { View } from 'react-native';
import { MovieSection } from './MovieSection';
import { styles } from './styles';
import { SectionData, SectionCallbacks } from '../../../../types/Section';

type Props = {
  sections: SectionData[];
} & SectionCallbacks;

export const SectionsList = ({
  sections,
  onSeeMore,
  onMoviePress,
  onWishlistToggle,
  wishlist,
}: Props) => {
  return (
    <View style={styles.sectionsList}>
      {sections.map(item => (
        <MovieSection
          key={item.title}
          {...item}
          onSeeMore={() => onSeeMore(item)}
          onMoviePress={onMoviePress}
          onWishlistToggle={onWishlistToggle}
          wishlist={wishlist}
        />
      ))}
    </View>
  );
};
