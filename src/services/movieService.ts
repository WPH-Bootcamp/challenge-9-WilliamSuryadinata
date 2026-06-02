import { MovieResponse, MovieDetails, Credits } from '@/types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3';

const buildUrl = (endpoint: string, params: Record<string, any> = {}): string => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });
  return url.toString();
};

export const movieService = {
  // Get popular movies with pagination
  getPopularMovies: async (page: number = 1): Promise<MovieResponse> => {
    const url = buildUrl('/movie/popular', { page, language: 'en-US' });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  // Get now playing movies
  getNowPlayingMovies: async (page: number = 1): Promise<MovieResponse> => {
    const url = buildUrl('/movie/now_playing', { page, language: 'en-US' });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  // Get movie details with credits and similar movies
  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const url = buildUrl(`/movie/${movieId}`, {
      append_to_response: 'credits,similar,videos',
      language: 'en-US',
    });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1): Promise<MovieResponse> => {
    const url = buildUrl('/search/movie', { query, page, language: 'en-US' });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  // Get credits for a movie
  getMovieCredits: async (movieId: number): Promise<Credits> => {
    const url = buildUrl(`/movie/${movieId}/credits`, { language: 'en-US' });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },

  // Get similar movies
  getSimilarMovies: async (movieId: number, page: number = 1): Promise<MovieResponse> => {
    const url = buildUrl(`/movie/${movieId}/similar`, { page, language: 'en-US' });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return response.json();
  },
};
