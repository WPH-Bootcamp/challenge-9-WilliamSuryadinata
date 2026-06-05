import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- Tambahan import Link
import SearchBar from '../Feature-components/SearchBar';
import logoIcon from '../../assets/icon/bxs_tv.png';
import searchIcon from '../../assets/icon/search.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // Mengatur efek bunglon / blur saat scrolling halaman ke bawah
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || isMobileSearchOpen
          ? 'bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between relative">
        {/* ================= SISI KIRI: LOGO & MENU DESKTOP ================= */}
        <div className="flex items-center space-x-10">
          {/* Logo & Brand Title (Ubah div menjadi Link) */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <img
              src={logoIcon}
              alt="Bxs Tv Logo"
              className="w-7 h-7 md:w-12 md:h-12 object-contain"
            />
            {/* Tulisan Movie otomatis disembunyikan di HP terkecil jika input search dibuka agar tidak menumpuk */}
            <span
              className={`text-white text-xl md:text-3xl font-bold tracking-wide transition-all ${isMobileSearchOpen ? 'hidden sm:block' : 'block'}`}
            >
              Movie
            </span>
          </Link>

          {/* Menu Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-18 md:pl-18">
            <Link
              to="/"
              className="text-white hover:text-white/80 text-sm md:text-[15px] font-medium transition-colors tracking-wide"
            >
              Home
            </Link>
            <Link
              to="/favorite"
              className="text-white hover:text-white/80 text-sm md:text-[15px] font-medium transition-colors tracking-wide"
            >
              Favorite
            </Link>
          </div>
        </div>

        {/* ================= SISI KANAN: SEARCH DESKTOP & CONTROLS HP ================= */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Bar Tampilan Desktop */}
          <div className="hidden md:block">
            <SearchBar />
          </div>
          {/* Controls Khusus Tampilan HP */}
          <div className="flex items-center md:hidden relative">
            {/* Kotak Input Search HP (Melebar instan ke arah kiri menutupi space navbar saat diklik) */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden flex items-center ${
                isMobileSearchOpen
                  ? 'w-[180px] sm:w-[240px] opacity-100 mr-2'
                  : 'w-0 opacity-0 mr-0'
              }`}
            >
              <div className="w-full">
                <SearchBar />
              </div>
            </div>

            {/* Tombol Toggle Ikon Search / Close */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors z-10 flex-shrink-0"
              aria-label="Toggle Search"
            >
              {isMobileSearchOpen ? (
                // Menampilkan Ikon Silang (X) jika Search terbuka
                <svg
                  className="w-5 h-5 text-white opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menampilkan Ikon Search Default jika ditutup
                <img
                  src={searchIcon}
                  alt="Search Icon"
                  className="w-5 h-5 object-contain opacity-80"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              )}
            </button>

            {/* Tombol Hamburger Garis Tiga */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none p-1 hover:bg-white/10 rounded ml-1"
              aria-label="Toggle Menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ================= TAMPILAN DROPDOWN MENU MOBILE (via Hamburger) ================= */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 bg-transparent flex flex-col space-y-4 border-t border-white/5 animate-fade-in">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-base font-semibold py-2 border-b border-white/5"
          >
            Home
          </Link>
          <Link
            to="/favorite"
            onClick={() => setIsMenuOpen(false)}
            className="text-white/70 hover:text-white text-base font-semibold py-2"
          >
            Favorite
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
