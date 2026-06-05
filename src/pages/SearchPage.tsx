import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Layout-components/Navbar';
import Footer from '../components/Layout-components/Footer';
import { useMovieStore, type MovieItem } from '../store/movieStore'; // <-- Gunakan Store Global

// Import Icon & Gambar
import starIcon from '../assets/icon/Star.png';
import playIcon from '../assets/icon/Play.png';
import loveIcon from '../assets/icon/love.png';
import frame55Icon from '../assets/icon/Frame 55.png';
import gorgeImg from '../assets/image/Gorge.png';
import mufasaImg from '../assets/image/Mufasa.png';
import braveImg from '../assets/image/Brave new World.png';
import brutalistImg from '../assets/image/Brutalist.png';
import companionImg from '../assets/image/Companion.png';
import dogmanImg from '../assets/image/Dog man.jpg';

const allMovies = [
  {
    id: 'gorge',
    title: 'The Gorge',
    image: gorgeImg,
    rating: '8.5/10',
    description:
      'Two highly trained operatives are stationed in guard posts on opposite sides of a vast, highly classified desert gorge, protecting the world from an unspoken dread that lurks within.',
  },
  {
    id: 'brave-new-world',
    title: 'Captain America: Brave New World',
    image: braveImg,
    rating: '6.2/10',
    description:
      'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
  },
  {
    id: 'mufasa',
    title: 'Mufasa: The Lion King',
    image: mufasaImg,
    rating: '8.2/10',
    description:
      'Rafiki relays the legend of Mufasa to young lion cub Kiara, detailing how an orphaned cub named Mufasa met a sympathetic lion named Taka.',
  },
  {
    id: 'brutalist',
    title: 'The Brutalist',
    image: brutalistImg,
    rating: '8.0/10',
    description:
      'A visionary architect and his wife flee post-war Europe to rebuild their legacy in America.',
  },
  {
    id: 'companion',
    title: 'Companion',
    image: companionImg,
    rating: '7.8/10',
    description:
      'A terrifying new sci-fi thriller that explores the dark side of artificial intelligence and human connection.',
  },
  {
    id: 'dogman',
    title: 'Dog Man',
    image: dogmanImg,
    rating: '7.9/10',
    description: 'Half dog, half man, all hero! Based on the wildly popular comic series.',
  },
];

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const { toggleFavorite, isFavorite } = useMovieStore();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleFavoriteClick = (e: React.MouseEvent, movie: MovieItem) => {
    e.preventDefault();
    e.stopPropagation();

    const isFav = isFavorite(movie.id);
    toggleFavorite(movie);

    if (!isFav) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      setShowNotification(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      {showNotification && (
        <div className="fixed top-28 md:top-36 left-1/2 transform -translate-x-1/2 z-[100] flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/10 px-8 py-3.5 md:w-[400px] rounded-full shadow-2xl transition-all duration-300">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
            <svg
              className="w-3.5 h-3.5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-white text-sm md:text-base font-medium tracking-wide">
            Success Add to Favorites
          </span>
        </div>
      )}

      <Navbar />

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-wide">
          Search Results for "{query}"
        </h1>

        {filteredMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 md:py-24">
            <img
              src={frame55Icon}
              alt="Not Found"
              className="w-48 h-48 md:w-64 md:h-64 object-contain mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Data not Found</h2>
            <p className="text-[#A4A7AE] text-sm md:text-base text-center">Try Other Keywords</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {filteredMovies.map((movie) => {
              const isFav = isFavorite(movie.id);

              return (
                <Link to="/detail" key={movie.id} className="block group">
                  <div className="py-8 border-b border-white/10 last:border-b-0 flex flex-col md:flex-row gap-6 md:gap-8 transition-all hover:bg-white/5">
                    <div className="w-full md:w-56 shrink-0">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-auto rounded-xl object-cover shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col flex-1 relative py-2">
                      <div className="flex justify-between items-start pr-12 md:pr-14 relative">
                        <h2 className="text-2xl md:text-3xl font-bold">{movie.title}</h2>
                        <button
                          onClick={(e) => handleFavoriteClick(e, movie)}
                          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full active:scale-95 transition-all z-10"
                        >
                          {isFav ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="#FF0000"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          ) : (
                            <img src={loveIcon} alt="Love" className="w-5 h-5 object-contain" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 mt-3">
                        <img src={starIcon} alt="Star" className="w-4 h-4 object-contain" />
                        <span className="text-[#A4A7AE] text-sm md:text-base font-medium">
                          {movie.rating}
                        </span>
                      </div>
                      <p className="mt-4 text-[#A4A7AE] text-sm md:text-[15px] leading-relaxed text-justify line-clamp-4">
                        {movie.description}
                      </p>
                      <div className="mt-5">
                        <button className="flex items-center space-x-3 md:space-x-4 bg-[#961200] text-white font-bold text-xs md:text-sm lg:text-base pl-5 pr-1.5 py-1.5 md:pl-6 md:pr-2 md:py-2 rounded-full hover:bg-[#7a0f00] active:scale-95 transition-all shadow-lg w-fit pointer-events-none">
                          <span>Watch Trailer</span>
                          <div className="bg-white w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                            <div
                              className="w-3 h-3 md:w-4 md:h-4 bg-[#961200] ml-0.5"
                              style={{
                                WebkitMaskImage: `url('${playIcon}')`,
                                WebkitMaskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskImage: `url('${playIcon}')`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                              }}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
