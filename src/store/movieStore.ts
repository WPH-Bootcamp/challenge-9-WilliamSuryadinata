import { create } from 'zustand';
// import { Movie } from '@/types/movie';
interface Movie {
  id: string;
  title: string;
  image: string;
  rating: string;
  description: string;
}
// TODO: Define your store state interface
interface MovieStore {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: string) => boolean;
}
// TODO: Add state properties
// Examples: favorites, watchlist, selectedMovie, etc.

// TODO: Add action methods
// Examples: addToFavorites, removeFromFavorites, etc.

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

export const useMovieStore = create<MovieStore>((set, get) => ({
  favorites: JSON.parse(localStorage.getItem('movieFavorites') || '[]'),

  toggleFavorite: (movie) => {
    const { favorites } = get();
    const exists = favorites.find((f) => f.id === movie.id);
    let newFavorites;

    if (exists) {
      newFavorites = favorites.filter((f) => f.id !== movie.id);
    } else {
      newFavorites = [...favorites, movie];
    }

    localStorage.setItem('movieFavorites', JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },

  isFavorite: (id) => get().favorites.some((f) => f.id === id),
}));
