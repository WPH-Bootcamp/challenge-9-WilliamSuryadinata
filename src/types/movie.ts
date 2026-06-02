export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids?: number[];
  adult: boolean;
  video: boolean;
  media_type?: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  credits?: Credits;
  similar?: MovieResponse;
  videos?: VideosResponse;
}

export interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  character?: string;
  job?: string;
}

export interface Cast extends Person {
  character: string;
  order: number;
}

export interface Crew extends Person {
  department: string;
  job: string;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface VideosResponse {
  id: number;
  results: Video[];
}
