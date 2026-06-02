import api from '@/lib/axios';
import { Movie, MovieResponse, MovieDetails, Credits } from '@/types/movie';
import { QUERY_KEYS } from '@/lib/constants';

export const movieService = {
  // Get popular movies with pagination
  getPopularMovies: async (page: number = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>('/movie/popular', {
      params: { page },
    });
    return data;
  },

  // Get now playing movies
  getNowPlayingMovies: async (page: number = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>('/movie/now_playing', {
      params: { page },
    });
    return data;
  },

  // Get movie details with credits and similar movies
  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const { data } = await api.get<MovieDetails>(`/movie/${movieId}`, {
      params: {
        append_to_response: 'credits,similar,videos',
      },
    });
    return data;
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>('/search/movie', {
      params: {
        query,
        page,
      },
    });
    return data;
  },

  // Get credits for a movie
  getMovieCredits: async (movieId: number): Promise<Credits> => {
    const { data } = await api.get<Credits>(`/movie/${movieId}/credits`);
    return data;
  },

  // Get similar movies
  getSimilarMovies: async (movieId: number, page: number = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>(`/movie/${movieId}/similar`, {
      params: { page },
    });
    return data;
  },
};
