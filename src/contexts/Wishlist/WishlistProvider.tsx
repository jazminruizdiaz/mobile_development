import React, { ReactNode, useState, useCallback, useMemo } from 'react';
import { WishlistContext } from './WishlistContext';
import { Movie } from '../../types/Movie';

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Movie[]>([]);

  const addToWishlist = useCallback((movie: Movie) => {
    setWishlist(prev => {
      if (prev.some(item => item.id === movie.id)) {
        return prev;
      }
      return [...prev, movie];
    });
  }, []);

  const removeFromWishlist = useCallback((movieId: number) => {
    setWishlist(prev => prev.filter(movie => movie.id !== movieId));
  }, []);

  const clearWishList = () => {
    setWishlist([]);
  };

  const isInWishlist = (movieId: number): boolean => {
    return wishlist.some(movie => movie.id === movieId);
  };

  const toggleWishlist = useCallback(
    (movie: Movie) => {
      if (isInWishlist(movie.id)) {
        removeFromWishlist(movie.id);
      } else {
        addToWishlist(movie);
      }
    },
    [addToWishlist, isInWishlist, removeFromWishlist],
  );

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishList,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
