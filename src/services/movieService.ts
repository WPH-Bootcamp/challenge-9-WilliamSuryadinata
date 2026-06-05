import api from '@/lib/axios';
import type { Movie, MovieResponse, MovieDetail } from '@/types/movie';


export const movieService = {
  getPopularMovies: (page: number = 1): Promise<MovieResponse> =>
    api.get<MovieResponse>('/movie/popular', { params: { page } }).then((res) => res.data),

  getNowPlayingMovies: (page: number = 1): Promise<MovieResponse> =>
    api.get<MovieResponse>('/movie/now_playing', { params: { page } }).then((res) => res.data),

  getMovieDetails: (movieId: number): Promise<MovieDetail> =>
    api
      .get<MovieDetail>(`/movie/${movieId}`, {
        params: {
          append_to_response: 'credits,videos',
        },
      })
      .then((res) => res.data),

  searchMovies: (query: string, page: number = 1): Promise<MovieResponse> =>
    api.get<MovieResponse>('/search/movie', { params: { query, page } }).then((res) => res.data),

  getUpcomingMovies: (page: number = 1): Promise<MovieResponse> =>
    api.get<MovieResponse>('/movie/upcoming', { params: { page } }).then((res) => res.data),

  getTopRatedMovies: (page: number = 1): Promise<MovieResponse> =>
    api.get<MovieResponse>('/movie/top_rated', { params: { page } }).then((res) => res.data),

  getSimilarMovies: (movieId: number, page: number = 1): Promise<MovieResponse> =>
    api
      .get<MovieResponse>(`/movie/${movieId}/similar`, { params: { page } })
      .then((res) => res.data),
};
