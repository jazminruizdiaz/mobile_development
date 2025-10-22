import React, { ReactNode, useState } from 'react';
import { WishlistContext } from './WishlistContext';
import { Movie } from '../../types/Movie';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { TMDB_BASE_URL, TMDB_ACCESS_TOKEN } from '@env';
export const WishlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Movie[]>([]);

  const addToWishlist = (movie: Movie) => {
    setWishlist(prev => {
      if (prev.some(item => item.id === movie.id)) {
        return prev;
      }
      return [...prev, movie];
    });
  };

  const removeFromWishlist = (movieId: number) => {
    setWishlist(prev => prev.filter(movie => movie.id !== movieId));
  };

  const clearWishList = () => {
    setWishlist([]);
  }

  const isInWishlist = (movieId: number): boolean => {
    return wishlist.some(movie => movie.id === movieId);
  };

  const toggleWishlist = async (movie: Movie) => {
    if (isInWishlist(movie.id)) {
      removeFromWishlist(movie.id);
    } else {
      try {
        const response = await fetch(`${TMDB_BASE_URL}/movie/${movie.id}?language=en-US`, {
          headers: {
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        const detailedMovie: Movie = {
          ...movie,
          genre: data.genres,
        };

        addToWishlist(detailedMovie);
      } catch (error) {
        console.error('Error fetching detailed movie:', error);
      }
    }
  }

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
