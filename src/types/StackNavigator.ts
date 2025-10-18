import { SectionType } from './Section';

export type StackParams = {
  Wishlist: undefined;
  Search: undefined;
  Profile: undefined;
  Movies: undefined;
  SeeMore: {
    type: SectionType;
    title: string;
    companyId?: number;
    genreId?: number;
  };
  TabNav: undefined;
};
