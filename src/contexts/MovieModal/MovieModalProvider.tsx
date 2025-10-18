import React, { useState, ReactNode } from 'react';
import { MovieModalContext } from './MovieModalContext';
import { MovieDetailModal } from '../../screens/Movie/components/modals/MovieDetailModal';

interface MovieModalProviderProps {
  children: ReactNode;
}

export const MovieModalProvider: React.FC<MovieModalProviderProps> = ({
  children,
}) => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openMovieDetails = (movieId: number) => {
    setSelectedMovieId(movieId);
    setIsModalVisible(true);
  };

  const closeMovieDetails = () => {
    setIsModalVisible(false);
    setSelectedMovieId(null);
  };

  const value = {
    selectedMovieId,
    isModalVisible,
    openMovieDetails,
    closeMovieDetails,
  };

  return (
    <MovieModalContext.Provider value={value}>
      {children}
      <MovieDetailModal />
    </MovieModalContext.Provider>
  );
};
