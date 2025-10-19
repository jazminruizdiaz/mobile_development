import { SectionType } from './Section';

export type StackParams = {
  TabNav: undefined;
  Search: undefined;
  Home: undefined;
  Movies: undefined;
  SeeMore: {
    type: SectionType;
    title: string;
    companyId?: number;
    genreId?: number;
  };
};
