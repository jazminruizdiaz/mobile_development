export interface SectionContent {
  type: 'Company' | 'Genre' | 'Best movies';
  title: string;
  actionLabel: string;
  onActionPress: () => void;
  genreId?: number;
  companyId?: number;
}
