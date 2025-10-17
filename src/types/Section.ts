export type SectionType = 'Company' | 'Genre' | 'Best movies';

export interface SectionData {
  type: SectionType;
  title: string;
  actionLabel: string;
  genreId?: number;
  companyId?: number;
}
export interface SectionCallbacks {
  onSeeMore: (section: SectionData) => void;
  onMoviePress: (movie_id: number) => void;
  onWishlistToggle: (movie_id: number) => void;
  wishlist: number[];
}

export interface SectionContent extends SectionData, SectionCallbacks {}
