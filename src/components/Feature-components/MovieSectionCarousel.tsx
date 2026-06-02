import { useState } from 'react';
import { Movie } from '@/types/movie';
import { MovieCard } from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface MovieSectionCarouselProps {
  title: string;
  movies: Movie[];
  isLoading?: boolean;
}

export function MovieSectionCarousel({
  title,
  movies,
  isLoading = false,
}: MovieSectionCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === 'left'
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });

      setScrollPosition(newPosition);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="section-title">{title}</h2>
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="w-40 h-56 flex-shrink-0" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="section-title">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        id={`carousel-${title}`}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
