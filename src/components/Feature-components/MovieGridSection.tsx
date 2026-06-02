import { Movie } from '@/types/movie';
import { MovieCard } from './MovieCard';
import { Skeleton } from '@/components/ui/skeleton';

interface MovieGridSectionProps {
  title: string;
  movies: Movie[];
  isLoading?: boolean;
}

export function MovieGridSection({
  title,
  movies,
  isLoading = false,
}: MovieGridSectionProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="section-title">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-56" />
          ))}
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">{title}: No movies found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
