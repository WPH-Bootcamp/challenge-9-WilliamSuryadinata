import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Movie } from '@/types/movie';
import { getImageUrl, formatRating } from '@/lib/utils';
import { useMovieStore } from '@/store/movieStore';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { isFavorited, toggleFavorite } = useMovieStore();
  const isFave = isFavorited(movie.id);

  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0 relative overflow-hidden group">
          <img
            src={getImageUrl(movie.poster_path, 'poster', 'medium')}
            alt={movie.title}
            className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-semibold">View Details</span>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-4">
          <div className="w-full space-y-1">
            <h3 className="font-semibold line-clamp-2 hover:text-primary">
              {movie.title}
            </h3>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{movie.release_date?.split('-')[0]}</span>
              <span>⭐ {formatRating(movie.vote_average)}</span>
            </div>
          </div>

          <Button
            size="sm"
            variant={isFave ? 'default' : 'outline'}
            className="w-full gap-2"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(movie);
            }}
          >
            <Heart className={`w-4 h-4 ${isFave ? 'fill-current' : ''}`} />
            {isFave ? 'Favorited' : 'Add to Favorites'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
