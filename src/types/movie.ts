export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  genre_ids: number[];
  media_type?: string;
  original_language: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetail extends Movie {
  budget: number;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string | null;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string | null;
  credits?: {
    cast: Cast[];
    crew: Crew[];
  };
  videos?: {
    results: Video[];
  };
}

export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
}
