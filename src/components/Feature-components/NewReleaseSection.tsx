import React, { useState } from 'react';
import MovieCard from './MovieCard';

// ============================================================================
// IMPORT SEMUA 21 GAMBAR DARI FOLDER ASSETS/IMAGE SESUAI NAMA FILE ASLI
// ============================================================================
import conclaveImg from '../../assets/image/Conclave.png';
import flightRiskImg from '../../assets/image/Flight Risk.png';
import paddingtonImg from '../../assets/image/Paddington in Peru.png';
import myFaultImg from '../../assets/image/My Fault.png';
import madAboutImg from '../../assets/image/Mad about the boy.png';
import betterManImg from '../../assets/image/Better Man.png';
import sirensImg from '../../assets/image/Sirens of The Deep.png';
import nosferatuImg from '../../assets/image/Nosferatu.png';
import septemberImg from '../../assets/image/September 5.png';
import anoraImg from '../../assets/image/Anora.png';
import nezhaImg from '../../assets/image/Ne Zha 2.png';
import snowgirlImg from '../../assets/image/Last Snowgirl.png';
import sonicImg from '../../assets/image/Sonic the Hedgehog 3.png';
import dolceVillaImg from '../../assets/image/La Dolce Villa.png';
import theOrderImg from '../../assets/image/The Order.png';
import gorgeImg from '../../assets/image/Gorge.png';
import mufasaImg from '../../assets/image/Mufasa.png';
import brutalistImg from '../../assets/image/Brutalist.png';
import companionImg from '../../assets/image/Companion.png';
import braveImg from '../../assets/image/Brave new World.png';
import dogmanImg from '../../assets/image/Dog man.jpg';

// Daftar 21 Film
const newReleaseMovies = [
  { id: 1, title: 'Conclave', image: conclaveImg, rating: '7.1/10' },
  { id: 2, title: 'Flight Risk', image: flightRiskImg, rating: '5.8/10' },
  { id: 3, title: 'Paddington in Peru', image: paddingtonImg, rating: '7.0/10' },
  { id: 4, title: 'My Fault: London', image: myFaultImg, rating: '7.67/10' },
  { id: 5, title: 'Mad About the Boy', image: madAboutImg, rating: '6.8/10' },
  { id: 6, title: 'Better Man', image: betterManImg, rating: '7.5/10' },
  { id: 7, title: 'Sirens of the Deep', image: sirensImg, rating: '7.3/10' },
  { id: 8, title: 'Nosferatu', image: nosferatuImg, rating: '6.7/10' },
  { id: 9, title: 'September 5', image: septemberImg, rating: '6.9/10' },
  { id: 10, title: 'Anora', image: anoraImg, rating: '7.0/10' },
  { id: 11, title: 'Ne Zha 2', image: nezhaImg, rating: '7.8/10' },
  { id: 12, title: 'The Last Snowgirl', image: snowgirlImg, rating: '6.7/10' },
  { id: 13, title: 'Sonic the Hedgehog 3', image: sonicImg, rating: '7.7/10' },
  { id: 14, title: 'Dolce Villa', image: dolceVillaImg, rating: '6.4/10' },
  { id: 15, title: 'The Order', image: theOrderImg, rating: '6.6/10' },
  { id: 16, title: 'The Gorge', image: gorgeImg, rating: '7.8/10' },
  { id: 17, title: 'Mufasa', image: mufasaImg, rating: '7.5/10' },
  { id: 18, title: 'The Brutalist', image: brutalistImg, rating: '7.0/10' },
  { id: 19, title: 'Companion', image: companionImg, rating: '7.1/10' },
  { id: 20, title: 'Brave New World', image: braveImg, rating: '6.2/10' },
  { id: 21, title: 'Dog Man', image: dogmanImg, rating: '7.0/10' },
];

const NewReleaseSection: React.FC = () => {
  // Menampilkan 10 film pertama (pas 2 baris di Desktop dengan 5 kolom)
  const [visibleCount, setVisibleCount] = useState(10);

  // Menambah jumlah film yang tampil kelipatan 5 (1 baris penuh di Desktop)
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="w-full mb-12 relative">
      <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-wide text-white">New Release</h2>

      <div className="relative">
        {/* Grid Film: Menyesuaikan menjadi 5 kolom di layar besar (lg:grid-cols-5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 pb-10">
          {newReleaseMovies.slice(0, visibleCount).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.image}
              rating={movie.rating}
            />
          ))}
        </div>

        {/* ================= EFEK SHADOW & TOMBOL LOAD MORE ================= */}
        {visibleCount < newReleaseMovies.length && (
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-2 pointer-events-none z-20">
            <button
              onClick={handleLoadMore}
              className="pointer-events-auto bg-[#181D27] border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold text-sm md:text-base py-3 px-18 rounded-full active:scale-95 transition-all duration-300 shadow-2xl mb-4"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewReleaseSection;
