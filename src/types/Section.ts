export interface SectionContent {
  type: 'Company' | 'Genre';
  title: string;
  actionLabel: string;
  onActionPress: () => void;
  genreId?: number;
  companyId?: number;
}
