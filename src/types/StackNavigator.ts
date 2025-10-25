import { SectionType } from './Section';

export type StackParams = {
  TabNav: undefined;
  Wishlist: undefined;
  Search: undefined;
  Profile: undefined;
  Home: undefined;
  SeeMore: {
    type: SectionType;
    title: string;
    companyId?: number;
    genreId?: number;
  };
};
