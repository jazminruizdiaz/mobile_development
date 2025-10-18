import { SectionType } from './Section';

export type StackParams = {
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
