import { SectionType } from './Section';

export type StackParams = {
  Movies: undefined;
  SectionDetails: {
    type: SectionType;
    title: string;
    companyId?: number;
    genreId?: number;
  };
};
