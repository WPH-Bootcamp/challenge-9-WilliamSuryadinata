import { MovieDetails } from '@/types/movie';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { getImageUrl, formatDate, formatRuntime, formatCurrency, formatRating } from '@/lib/utils';
import { useMovieStore } from '@/store/movieStore';

interface MovieDetailSectionProps {
  movie: MovieDetails;
}

export function MovieDetailSection({ movie }: MovieDetailSectionProps) {
  const { isFavorited, toggleFavorite } = useMovieStore();
  const isFave = isFavorited(movie.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Poster */}
      <div className="md:col-span-1">
        <img
          src={getImageUrl(movie.poster_path, 'poster', 'large')}
          alt={movie.title}
          className="w-full rounded-lg shadow-lg"
        />
        <Button
          size="lg"
          className="w-full mt-4 gap-2"
          variant={isFave ? 'default' : 'outline'}
          onClick={() => toggleFavorite(movie)}
        >
          <Heart className={`w-5 h-5 ${isFave ? 'fill-current' : ''}`} />
          {isFave ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </div>

      {/* Details */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          {movie.tagline && <p className="text-lg text-muted-foreground italic">"{movie.tagline}"</p>}
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>
            <span>⭐ {formatRating(movie.vote_average)} / 10</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Release Date:</span>
            <span>{formatDate(movie.release_date)}</span>
          </div>
          {movie.runtime && (
            <div className="flex items-center gap-2">
              <span className="font-semibold">Runtime:</span>
              <span>{formatRuntime(movie.runtime)}</span>
            </div>
          )}
        </div>

        {movie.genres && movie.genres.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{movie.overview}</p>
        </div>

        {(movie.budget || movie.revenue) && (
          <Card className="p-4 space-y-2">
            {movie.budget > 0 && (
              <div className="flex justify-between">
                <span className="font-semibold">Budget:</span>
                <span>{formatCurrency(movie.budget)}</span>
              </div>
            )}
            {movie.revenue > 0 && (
              <div className="flex justify-between">
                <span className="font-semibold">Revenue:</span>
                <span>{formatCurrency(movie.revenue)}</span>
              </div>
            )}
          </Card>
        )}

        {movie.production_companies && movie.production_companies.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold">Production Companies</h3>
            <div className="flex flex-wrap gap-2">
              {movie.production_companies.map((company) => (
                <span key={company.id} className="text-sm text-muted-foreground">
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
