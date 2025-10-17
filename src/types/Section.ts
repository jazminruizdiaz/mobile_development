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
}

export interface SectionContent extends SectionData, SectionCallbacks {}
