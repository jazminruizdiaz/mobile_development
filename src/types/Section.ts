export interface SectionData {
  type: 'Company' | 'Genre' | 'Best movies';
  title: string;
  actionLabel: string;
  genreId?: number;
  companyId?: number;
}
export interface SectionCallbacks {
  onSeeMore: () => void;
  onMoviePress: (movie_id: number) => void;
  onWishlistToggle: (movie_id: number) => void;
  wishlist: number[];
}

export interface SectionContent extends SectionData, SectionCallbacks {}
