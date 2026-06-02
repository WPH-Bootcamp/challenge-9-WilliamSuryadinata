import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Movie } from '@/types/movie';
import { STORAGE_KEYS } from '@/lib/constants';

interface MovieStore {
  // State
  favorites: Movie[];
  searchHistory: string[];

  // Actions
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  toggleFavorite: (movie: Movie) => void;
  isFavorited: (movieId: number) => boolean;
  addToSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
}

export const useMovieStore = create<MovieStore>()(
  persist(
    (set, get) => ({
      // Initial state
      favorites: [],
      searchHistory: [],

      // Actions
      addToFavorites: (movie) =>
        set((state) => ({
          favorites: [
            ...state.favorites.filter((m) => m.id !== movie.id),
            movie,
          ],
        })),

      removeFromFavorites: (movieId) =>
        set((state) => ({
          favorites: state.favorites.filter((m) => m.id !== movieId),
        })),

      toggleFavorite: (movie) => {
        const { isFavorited, addToFavorites, removeFromFavorites } = get();
        if (isFavorited(movie.id)) {
          removeFromFavorites(movie.id);
        } else {
          addToFavorites(movie);
        }
      },

      isFavorited: (movieId) => {
        return get().favorites.some((m) => m.id === movieId);
      },

      addToSearchHistory: (query) => {
        set((state) => ({
          searchHistory: [
            query,
            ...state.searchHistory.filter((q) => q !== query).slice(0, 9),
          ],
        }));
      },

      clearSearchHistory: () =>
        set({
          searchHistory: [],
        }),
    }),
    {
      name: STORAGE_KEYS.favorites,
    }
  )
);
