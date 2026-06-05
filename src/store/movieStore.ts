import { create } from 'zustand';

export interface MovieItem {
  id: string;
  title: string;
  image: string;
  rating: string;
  description: string;
}

interface MovieStore {
  favorites: MovieItem[];
  toggleFavorite: (movie: MovieItem) => void;
  isFavorite: (id: string) => boolean;
}

export const useMovieStore = create<MovieStore>((set, get) => ({
  // 1. Ambil data awal dari localStorage
  favorites: JSON.parse(localStorage.getItem('movieFavorites') || '[]'),

  // 2. Fungsi untuk Tambah/Hapus (Toggle)
  toggleFavorite: (movie) => {
    const currentFavorites = get().favorites;
    const exists = currentFavorites.find((f) => f.id === movie.id);
    let newFavorites;

    if (exists) {
      newFavorites = currentFavorites.filter((f) => f.id !== movie.id);
    } else {
      newFavorites = [...currentFavorites, movie];
    }

    localStorage.setItem('movieFavorites', JSON.stringify(newFavorites));
    set({ favorites: newFavorites });
  },

  // 3. Fungsi untuk mengecek apakah film sudah ada di favorit
  isFavorite: (id) => get().favorites.some((f) => f.id === id),
}));
