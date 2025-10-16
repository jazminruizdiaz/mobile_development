import { createContext, useContext } from 'react';

export interface MovieModalContextType {
  selectedMovieId: number | null;
  isModalVisible: boolean;
  openMovieDetails: (movieId: number) => void;
  closeMovieDetails: () => void;
}

export const MovieModalContext = createContext<
  MovieModalContextType | undefined
>(undefined);

export const useMovieModal = () => {
  const context = useContext(MovieModalContext);
  if (!context) {
    throw new Error('useMovieModal must be used within a MovieModalProvider');
  }
  return context;
};
