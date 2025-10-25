import React, { useState, ReactNode, useCallback, useMemo } from 'react';
import { MovieModalContext } from './MovieModalContext';
import { MovieDetailModal } from '../../components/organisms/MovieDetailModal/MovieDetailModal';

interface MovieModalProviderProps {
  children: ReactNode;
}

export const MovieModalProvider: React.FC<MovieModalProviderProps> = ({
  children,
}) => {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openMovieDetails = useCallback((movieId: number) => {
    setSelectedMovieId(movieId);
    setIsModalVisible(true);
  }, []);

  const closeMovieDetails = useCallback(() => {
    setIsModalVisible(false);
    setSelectedMovieId(null);
  }, []);

  const value = useMemo(
    () => ({
      selectedMovieId,
      isModalVisible,
      openMovieDetails,
      closeMovieDetails,
    }),
    [selectedMovieId, isModalVisible, openMovieDetails, closeMovieDetails],
  );

  return (
    <MovieModalContext.Provider value={value}>
      {children}
      <MovieDetailModal />
    </MovieModalContext.Provider>
  );
};
