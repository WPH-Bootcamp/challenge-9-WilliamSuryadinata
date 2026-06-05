import React, { useEffect, useState } from 'react';
import Navbar from '../components/Layout-components/Navbar';
import Footer from '../components/Layout-components/Footer';

// ==========================================
// IMPORT GAMBAR DARI FOLDER ASSETS/IMAGE
// ==========================================
import hulkHeroImg from '../assets/image/Hulk-Hero.png';
import braveImg from '../assets/image/Brave new World.png';

// Import Gambar Cast / Artis
import anthonyImg from '../assets/image/Anthony Mackie.png';
import harrisonImg from '../assets/image/Harrison Ford.png';
import dannyImg from '../assets/image/Danny Ramirez.png';
import shiraImg from '../assets/image/Shira Haas.png';
import timImg from '../assets/image/Tim Blake Nelson.png';

// ==========================================
// IMPORT ICON DARI FOLDER ASSETS/ICON
// ==========================================
import calendarIcon from '../assets/icon/calendar.png';
import playIcon from '../assets/icon/Play.png';
import loveIcon from '../assets/icon/love.png';
import starIcon from '../assets/icon/Star.png';
import recordIcon from '../assets/icon/record.png';
import emojiIcon from '../assets/icon/emoji-happy.png';

const MovieDetailPage: React.FC = () => {
  // State untuk melacak status favorit dan visibilitas notifikasi
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Data film spesifik halaman ini yang akan disimpan ke FavoritePage
  const currentMovieData = {
    id: 'brave-new-world', // ID unik untuk film ini
    title: 'Captain America: Brave New World',
    image: braveImg,
    rating: '6.2/10',
    description:
      'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
  };

  // Cek apakah film ini sudah ada di favorit (localStorage) saat halaman dimuat
  useEffect(() => {
    // Scroll ke atas setiap kali halaman dibuka
    window.scrollTo(0, 0);

    // Ambil data favorit dari localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('movieFavorites') || '[]');
    // Cek apakah ID film ini ada di dalam daftar yang disimpan
    const isAlreadyFav = savedFavorites.some((fav: any) => fav.id === currentMovieData.id);
    setIsFavorite(isAlreadyFav);
  }, []);

  // Fungsi Toggle Favorit (Tambah / Batal)
  const handleFavoriteClick = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('movieFavorites') || '[]');

    if (!isFavorite) {
      // JIKA BELUM FAVORIT -> Jadikan Favorit, Simpan, & Munculkan Notif
      const newFavorites = [...savedFavorites, currentMovieData];
      localStorage.setItem('movieFavorites', JSON.stringify(newFavorites));
      setIsFavorite(true);
      setShowNotification(true);

      // Hilangkan notifikasi otomatis setelah 3 detik
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      // JIKA SUDAH FAVORIT -> Batalkan Favorit, Hapus, (Tanpa Notif)
      const updatedFavorites = savedFavorites.filter((fav: any) => fav.id !== currentMovieData.id);
      localStorage.setItem('movieFavorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      setShowNotification(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      {/* ========================================== */}
      {/* NOTIFIKASI PLACEHOLDER (Muncul saat Love ditekan pertama kali) */}
      {/* ========================================== */}
      {showNotification && (
        <div className="fixed top-28 md:top-36 left-1/2 transform -translate-x-1/2 z-[100] flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/10 px-8 py-3.5 md:w-[400px] rounded-full shadow-2xl transition-all duration-300">
          {/* Lingkaran Putih dengan Centang Hitam */}
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

      {/* Navbar di atas (z-50) */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* ========================================== */}
      {/* BACKGROUND HERO HULK (Full Width, Fades to Black) */}
      {/* ========================================== */}
      <div className="absolute top-0 left-0 w-full h-[90vh]">
        <img
          src={hulkHeroImg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60 md:opacity-80"
        />
        {/* Gradasi sangat tebal dari bawah ke atas agar menyatu ke area hitam */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* ========================================== */}
      {/* KONTEN UTAMA */}
      {/* ========================================== */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pt-[45vh] pb-12">
        {/* Kontainer Poster & Info dibuat rata bawah (items-end) */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
          {/* SISI KIRI: Gambar Poster Film */}
          <div className="w-56 sm:w-64 md:w-[320px] shrink-0">
            <img
              src={braveImg}
              alt="Brave New World"
              className="w-full h-auto rounded-xl shadow-2xl border border-white/5"
            />
          </div>

          {/* SISI KANAN: Detail Informasi */}
          <div className="flex flex-col flex-1 w-full pb-2">
            <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-bold tracking-tight mb-4 leading-tight drop-shadow-lg text-center md:text-left">
              Captain America: Brave New World
            </h1>

            <div className="flex items-center justify-center md:justify-start space-x-2.5 mb-8">
              <img src={calendarIcon} alt="Calendar" className="w-5 h-5 object-contain" />
              <span className="text-[#A4A7AE] text-sm md:text-base font-medium">
                12 Februari 2025
              </span>
            </div>

            {/* Area Tombol: Play & Love */}
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-8">
              {/* Tombol Play Merah */}
              <button className="flex items-center space-x-3 bg-[#a10000] hover:bg-red-700 text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full active:scale-95 transition-all shadow-lg">
                <span>Watch Trailer</span>
                <img src={playIcon} alt="Play" className="w-5 h-5 object-contain filter invert" />
              </button>

              {/* Tombol Lingkaran Love */}
              <button
                onClick={handleFavoriteClick}
                className="flex items-center justify-center w-14 h-14 bg-[#0A0D1299] hover:bg-white/20 border border-white/10 rounded-full active:scale-95 transition-all backdrop-blur-md"
              >
                {/* Kondisional Render: Jika isFavorite true, tampilkan SVG Merah. Jika tidak, tampilkan gambar asli. */}
                {isFavorite ? (
                  <svg
                    width="22"
                    height="22"
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

            {/* ========================================== */}
            {/* TIGA KOTAK INFO */}
            {/* ========================================== */}
            <div className="grid grid-cols-3 gap-3 md:gap-5 w-full">
              <div className="bg-[#0A0D1299] backdrop-blur-md border border-white/5 rounded-2xl py-5 px-2 flex flex-col items-center justify-center text-center shadow-lg">
                <img src={starIcon} alt="Rating" className="w-6 h-6 mb-2 object-contain" />
                <span className="text-[#A4A7AE] text-xs md:text-sm mb-1">Rating</span>
                <span className="text-white font-bold text-base md:text-lg">6.2/10</span>
              </div>

              <div className="bg-[#0A0D1299] backdrop-blur-md border border-white/5 rounded-2xl py-5 px-2 flex flex-col items-center justify-center text-center shadow-lg">
                <img src={recordIcon} alt="Genre" className="w-6 h-6 mb-2 object-contain" />
                <span className="text-[#A4A7AE] text-xs md:text-sm mb-1">Genre</span>
                <span className="text-white font-bold text-base md:text-lg">Action</span>
              </div>

              <div className="bg-[#0A0D1299] backdrop-blur-md border border-white/5 rounded-2xl py-5 px-2 flex flex-col items-center justify-center text-center shadow-lg">
                <img src={emojiIcon} alt="Age Limit" className="w-6 h-6 mb-2 object-contain" />
                <span className="text-[#A4A7AE] text-xs md:text-sm mb-1">Age Limit</span>
                <span className="text-white font-bold text-base md:text-lg">13</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* OVERVIEW & CAST SECTION */}
        {/* ========================================== */}
        <div className="mt-16 md:mt-20 max-w-[1280px]">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Overview</h2>
            <p className="text-[#A4A7AE] text-sm md:text-[15px] leading-relaxed text-justify md:text-left max-w-4xl">
              After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in
              the middle of an international incident. He must discover the reason behind a
              nefarious global plot before the true mastermind has the entire world seeing red.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Cast & Crew</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
              <div className="flex items-center space-x-4">
                <img
                  src={anthonyImg}
                  alt="Anthony Mackie"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm md:text-base mb-0.5">
                    Anthony Mackie
                  </span>
                  <span className="text-[#A4A7AE] text-xs md:text-sm">
                    Sam Wilson / Captain America
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={harrisonImg}
                  alt="Harrison Ford"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm md:text-base mb-0.5">
                    Harrison Ford
                  </span>
                  <span className="text-[#A4A7AE] text-xs md:text-sm">President Thaddeus Ross</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={dannyImg}
                  alt="Danny Ramirez"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm md:text-base mb-0.5">
                    Danny Ramirez
                  </span>
                  <span className="text-[#A4A7AE] text-xs md:text-sm">Joaquin Torres</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={shiraImg}
                  alt="Shira Haas"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm md:text-base mb-0.5">
                    Shira Haas
                  </span>
                  <span className="text-[#A4A7AE] text-xs md:text-sm">Ruth Bat-Seraph</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={timImg}
                  alt="Tim Blake Nelson"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm md:text-base mb-0.5">
                    Tim Blake Nelson
                  </span>
                  <span className="text-[#A4A7AE] text-xs md:text-sm">Samuel Sterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetailPage;
