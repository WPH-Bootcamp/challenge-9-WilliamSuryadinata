import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout-components/Navbar';
import Footer from '../components/Layout-components/Footer';

// ==========================================
// IMPORT ICON
// ==========================================
import starIcon from '../assets/icon/Star.png';
import playIcon from '../assets/icon/Play.png';
// Pastikan nama file gambar frame 52 Anda sesuai huruf besar/kecilnya
import frameEmptyIcon from '../assets/icon/Frame 52.png';

interface FavoriteMovie {
  id: string;
  title: string;
  image: string;
  rating: string;
  description: string;
}

const FavoritePage: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  // Mengambil data favorit dari penyimpanan browser saat halaman dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
    const savedFavorites = JSON.parse(localStorage.getItem('movieFavorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  // Fungsi untuk menghapus film dari daftar favorit
  const removeFavorite = (idToRemove: string) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== idToRemove);
    setFavorites(updatedFavorites);
    localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites)); // Simpan perubahan
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-12">
        {/* Judul Favorite Selalu Ada di Kiri */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide">Favorite</h1>

        {/* KONDISI 1: JIKA TIDAK ADA FAVORIT (KOSONG) */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 md:py-24">
            <img
              src={frameEmptyIcon}
              alt="Empty State"
              className="w-48 h-48 md:w-64 md:h-64 object-contain mb-6"
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Data Empty</h2>
            <p className="text-[#A4A7AE] text-sm md:text-base mb-8 text-center">
              You don't have a favorite movie yet.
            </p>
            <Link to="/">
              <button className="bg-[#a10000] hover:bg-red-700 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full active:scale-95 transition-all shadow-lg">
                Explore Movie
              </button>
            </Link>
          </div>
        ) : (
          /* KONDISI 2: JIKA ADA DATA FAVORIT */
          <div className="flex flex-col gap-6">
            {favorites.map((movie) => (
              <div
                key={movie.id}
                className="bg-[#0A0D1299] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8 backdrop-blur-md"
              >
                {/* Gambar Poster Kiri */}
                <div className="w-full md:w-56 shrink-0">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                  />
                </div>

                {/* Info Detail Kanan */}
                <div className="flex flex-col flex-1 relative py-2">
                  {/* Judul & Icon Love Merah (Bisa dihapus) */}
                  <div className="flex justify-between items-start pr-12 md:pr-14">
                    <h2 className="text-2xl md:text-3xl font-bold">{movie.title}</h2>
                    {/* Icon Love Absolute di Kanan Atas */}
                    <button
                      onClick={() => removeFavorite(movie.id)}
                      className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full active:scale-95 transition-all"
                      title="Remove from favorites"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FF0000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Rating Bintang */}
                  <div className="flex items-center space-x-2 mt-2">
                    <img src={starIcon} alt="Star" className="w-4 h-4 object-contain" />
                    <span className="text-[#A4A7AE] text-sm md:text-base font-medium">
                      {movie.rating}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="mt-4 text-[#A4A7AE] text-sm md:text-[15px] leading-relaxed text-justify line-clamp-4">
                    {movie.description}
                  </p>

                  {/* Tombol Watch Trailer di Bawah */}
                  <div className="mt-auto pt-6">
                    <button className="flex items-center space-x-3 bg-[#a10000] hover:bg-red-700 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full active:scale-95 transition-all shadow-lg w-fit">
                      <span>Watch Trailer</span>
                      <img
                        src={playIcon}
                        alt="Play"
                        className="w-4 h-4 md:w-5 md:h-5 object-contain filter invert"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FavoritePage;
