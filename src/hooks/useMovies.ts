import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';
import { QUERY_KEYS } from '@/lib/constants';

export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.popular(page),
    queryFn: () => movieService.getPopularMovies(page),
  });
};

export const useNowPlayingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying(page),
    queryFn: () => movieService.getNowPlayingMovies(page),
  });
};

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.details(movieId),
    queryFn: () => movieService.getMovieDetails(movieId),
    enabled: !!movieId,
  });
};

export const useSearchMovies = (query: string, page: number = 1, enabled: boolean = false) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.search(query, page),
    queryFn: () => movieService.searchMovies(query, page),
    enabled: enabled && !!query,
  });
};

export const useUpcomingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'upcoming', page],
    queryFn: () => movieService.getUpcomingMovies(page),
  });
};

export const useTopRatedMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'top-rated', page],
    queryFn: () => movieService.getTopRatedMovies(page),
  });
};

export const useSimilarMovies = (movieId: number, page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'similar', movieId, page],
    queryFn: () => movieService.getSimilarMovies(movieId, page),
    enabled: !!movieId,
  });
};
