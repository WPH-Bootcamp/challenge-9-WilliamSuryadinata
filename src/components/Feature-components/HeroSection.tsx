import { Link } from 'react-router-dom';
import { Movie } from '@/types/movie';
import { getImageUrl, formatRating } from '@/lib/utils';
import { Play, Heart } from 'lucide-react';

interface HeroSectionProps {
  movie: Movie;
}

export function HeroSection({ movie }: HeroSectionProps) {
  return (
    <div className="hero-section">
      <img
        src={getImageUrl(movie.backdrop_path || movie.poster_path, 'backdrop', 'large')}
        alt={movie.title}
        className="hero-backdrop"
      />
      <div className="hero-overlay" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1 text-yellow-400">
              <span>⭐</span>
              <span className="font-semibold">{formatRating(movie.vote_average)}</span>
            </span>
            {movie.release_date && (
              <span className="text-gray-300">
                {movie.release_date.split('-')[0]}
              </span>
            )}
          </div>

          <p className="text-gray-200 mb-6 line-clamp-3">
            {movie.overview}
          </p>

          <div className="flex gap-4">
            <Link to={`/movie/${movie.id}`}>
              <button className="watch-trailer-btn">
                <Play className="w-5 h-5" />
                Watch Trailer
              </button>
            </Link>
            <button
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors bg-gray-700 hover:bg-gray-600 text-white"
            >
              <Heart className="w-5 h-5" />
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
