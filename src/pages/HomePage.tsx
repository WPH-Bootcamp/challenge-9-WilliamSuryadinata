import React from 'react';
import heroBg from '../assets/image/The Gorge-Hero.png';
import playIcon from '../assets/icon/Play.png';

// Import Komponen Feature
import Navbar from '../components/Layout-components/Navbar';
import MovieGrid from '../components/Feature-components/MovieGrid';
import NewReleaseSection from '../components/Feature-components/NewReleaseSection'; // <-- Import baru
import Footer from '../components/Layout-components/Footer'; // <-- Import Footer ditambahkan

// Import aset gambar poster film Trending
import gorgeImg from '../assets/image/Gorge.png';
import mufasaImg from '../assets/image/Mufasa.png';
import brutalistImg from '../assets/image/Brutalist.png';
import companionImg from '../assets/image/Companion.png';
import braveImg from '../assets/image/Brave new World.png';
import dogmanImg from '../assets/image/Dog man.jpg';

// Data Trending (Tetap sama)
const trendingMovies = [
  { id: 1, title: 'The Gorge', image: gorgeImg, rating: '7.8/10' },
  { id: 2, title: 'Mufasa: The Lion King', image: mufasaImg, rating: '7.5/10' },
  { id: 3, title: 'The Brutalist', image: brutalistImg, rating: '7.0/10' },
  { id: 4, title: 'Companion', image: companionImg, rating: '7.1/10' },
  { id: 5, title: 'Brave New World', image: braveImg, rating: '6.2/10' },
  { id: 6, title: 'Dog Man', image: dogmanImg, rating: '7.0/10' },
];

const HomePage: React.FC = () => {
  return (
    // Latar belakang diatur mutlak hitam (bg-black)
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative w-full min-h-[85vh] md:min-h-screen bg-cover bg-center flex items-center md:opacity-90"
        style={{ backgroundImage: `url('${heroBg}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/50 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent w-full h-full" />

        <div className="relative z-10 w-full max-w-3xl px-6 sm:px-12 md:pl-35 flex flex-col items-center text-center md:items-start md:text-left justify-center mt-20 md:mt-5 mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-3 drop-shadow-md select-none leading-none">
            The Gorge
          </h1>

          <p className="text-sm sm:text-base md:text-[16px] md:py-3 text-[#A4A7AE]  leading-8 mb-6 md:mb-7 drop-shadow-sm font-medium">
            Two highly trained operatives are stationed in guard posts on opposite sides of a vast,
            highly classified desert gorge, protecting the world from an unspoken dread that lurks
            within.
          </p>

          <div className="flex items-center space-x-3 md:space-x-4">
            <button className="flex items-center space-x-2 md:space-x-3 bg-[#961200] text-white font-bold text-xs md:text-base px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-white/80 active:scale-95 transition-all shadow-lg">
              <span>Watch Trailer</span>
              <img
                src={playIcon}
                alt="Play Icon"
                className="w-3.5 h-3.5 md:w-5 md:h-5 object-contain"
              />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white font-bold text-xs md:text-base px-5 md:px-7 py-2.5 md:py-3 rounded-full border border-white/30 hover:bg-white/30 active:scale-95 transition-all shadow-lg">
              See Detail
            </button>
          </div>
        </div>
      </div>

      {/* ================= BAGIAN DAFTAR FILM ================= */}
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 1. Komponen Trending (dengan efek slide Netflix) */}
        <MovieGrid title="Trending Now" movies={trendingMovies} isTrending={true} />

        {/* Jarak spasi antara Trending dan New Release */}
        <div className="h-8"></div>

        {/* 2. Komponen New Release (dengan efek Load More ke bawah) */}
        <NewReleaseSection />
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default HomePage;
