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
          title={item.title}
          actionLabel={item.actionLabel}
          onSeeMore={onSeeMore}
          type={item.type}
          companyId={item.companyId}
          genreId={item.genreId}
          onMoviePress={onMoviePress}
          onWishlistToggle={onWishlistToggle}
          wishlist={wishlist}
        />
      ))}
    </View>
  );
};
