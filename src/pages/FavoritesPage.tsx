import { useMovieStore } from '@/store/movieStore';
import { MovieCard } from '@/components/Feature-components/MovieCard';

export function FavoritesPage() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <div className="space-y-6">
      <h1 className="section-title">Favorites</h1>

      {favorites.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No favorites yet. Add movies to your favorites!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
