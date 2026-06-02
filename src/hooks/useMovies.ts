import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import { QUERY_KEYS } from '@/lib/constants';
import { MovieResponse, MovieDetails } from '@/types/movie';

// Fetch popular movies
export const usePopularMovies = (page: number = 1) => {
  return useQuery<MovieResponse>({
    queryKey: QUERY_KEYS.movies.popular(page),
    queryFn: () => movieService.getPopularMovies(page),
  });
};

// Fetch now playing movies
export const useNowPlayingMovies = (page: number = 1) => {
  return useQuery<MovieResponse>({
    queryKey: QUERY_KEYS.movies.nowPlaying(page),
    queryFn: () => movieService.getNowPlayingMovies(page),
  });
};

// Fetch movie details
export const useMovieDetails = (movieId: number | null) => {
  return useQuery<MovieDetails>({
    queryKey: QUERY_KEYS.movies.details(movieId!),
    queryFn: () => movieService.getMovieDetails(movieId!),
    enabled: !!movieId,
  });
};

// Search movies
export const useSearchMovies = (query: string, page: number = 1, enabled: boolean = true) => {
  return useQuery<MovieResponse>({
    queryKey: QUERY_KEYS.movies.search(query, page),
    queryFn: () => movieService.searchMovies(query, page),
    enabled: enabled && query.length > 0,
  });
};

// Fetch movie credits
export const useMovieCredits = (movieId: number | null) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.credits(movieId!),
    queryFn: () => movieService.getMovieCredits(movieId!),
    enabled: !!movieId,
  });
};

// Fetch similar movies
export const useSimilarMovies = (movieId: number | null, page: number = 1) => {
  return useQuery<MovieResponse>({
    queryKey: QUERY_KEYS.movies.similar(movieId!),
    queryFn: () => movieService.getSimilarMovies(movieId!, page),
    enabled: !!movieId,
  });
};
