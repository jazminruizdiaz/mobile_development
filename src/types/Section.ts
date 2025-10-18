export interface SectionData {
  type: 'Company' | 'Genre' | 'Best movies';
  title: string;
  actionLabel: string;
  genreId?: number;
  companyId?: number;
}
export interface SectionCallbacks {
  onSeeMore: () => void;
}

export interface SectionContent extends SectionData, SectionCallbacks {}
