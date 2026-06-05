import api from '@/lib/axios';
import type { Movie, MovieResponse, MovieDetail } from '@/types/movie';
// import { Movie, MovieResponse } from '@/types/movie';

// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

// TODO: Implement getPopularMovies function
// Endpoint: GET /movie/popular

// TODO: Implement getNowPlayingMovies function
// Endpoint: GET /movie/now_playing

// TODO: Implement getMovieDetails function
// Endpoint: GET /movie/{movie_id}

// TODO: Implement searchMovies function
// Endpoint: GET /search/movie

// TODO: Add more endpoints as needed

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
