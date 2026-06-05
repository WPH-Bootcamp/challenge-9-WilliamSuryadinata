import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';

// Tipe data untuk daftar film
interface Movie {
  id: number;
  title: string;
  image: string;
  rating: string;
}

interface MovieGridProps {
  title: string;
  movies: Movie[];
  isTrending?: boolean;
}

const MovieGrid: React.FC<MovieGridProps> = ({ title, movies, isTrending }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // State untuk mendeteksi apakah kita sudah bergeser dari titik awal (0)
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // TRIK NETFLIX: Menggandakan film hingga 15 kali lipat (90 film).
  const loopedMovies = Array(15).fill(movies).flat();

  // Fungsi untuk mendeteksi posisi layar saat bergeser
  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 10);
    }
  };

  // Fungsi menggeser selalu mulus ke satu arah
  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full mb-12 relative">
      <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-wide text-white">{title}</h2>

      <div className="relative group">
        {/* ================= CONTAINER SLIDER (FILM) ================= */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {loopedMovies.map((movie, index) => (
            <div
              key={`${movie.id}-${index}`}
              className="w-[140px] sm:w-[160px] lg:w-[180px] shrink-0 snap-start"
            >
              <MovieCard
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                rank={isTrending ? (index % movies.length) + 1 : undefined}
              />
            </div>
          ))}
        </div>

        {/* ================= EFEK SHADOW & TOMBOL KANAN ================= */}
        <div className="absolute right-0 top-0 h-[calc(100%-2rem)] w-24 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-30 flex items-center justify-end pr-2 md:pr-4 opacity-100 transition-opacity duration-300">
          <button
            onClick={() => slide('right')}
            className="pointer-events-auto flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#181818] hover:bg-white/20 border border-transparent hover:border-white/40 text-white rounded-full transition-all duration-300 shadow-xl"
            aria-label="Geser Kanan"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 ml-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* ================= EFEK SHADOW & TOMBOL KIRI (MUNCUL DINAMIS) ================= */}
        {showLeftArrow && (
          <div className="absolute left-0 top-0 h-[calc(100%-2rem)] w-24 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-30 hidden md:group-hover:flex items-center justify-start pl-2 md:pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => slide('left')}
              className="pointer-events-auto flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#181818] hover:bg-white/20 border border-transparent hover:border-white/40 text-white rounded-full transition-all duration-300 shadow-xl"
              aria-label="Geser Kiri"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 mr-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieGrid;
