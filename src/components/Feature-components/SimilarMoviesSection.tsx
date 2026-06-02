import { Movie } from '@/types/movie';
import { MovieCard } from './MovieCard';

interface SimilarMoviesSectionProps {
  movies: Movie[];
}

export function SimilarMoviesSection({ movies }: SimilarMoviesSectionProps) {
  if (movies.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Similar Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
