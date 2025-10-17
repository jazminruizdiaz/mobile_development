import { SectionType } from './Section';

export type StackParams = {
  Home: undefined;
  Movies: undefined;
  SectionDetails: {
    type: SectionType;
    title: string;
    companyId?: number;
    genreId?: number;
  };
  TabNav: undefined;
};
