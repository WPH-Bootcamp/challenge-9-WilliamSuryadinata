import React, { useState } from 'react';
import searchIcon from '../../assets/icon/search.png';

interface SearchBarProps {
  // Jika Anda nanti menggunakan global state (Zustand), prop ini bisa disesuaikan
  onSearchChange?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearchChange) {
      onSearchChange(value);
    }

    // CATATAN LOGIKA: Untuk membuat pencarian case-insensitive (UPPERCASE/lowercase),
    // pada komponen filter data film nanti gunakan format seperti ini:
    // const filtered = movies.filter(movie =>
    //   movie.title.toLowerCase().includes(value.toLowerCase())
    // );
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search movie..."
        className="w-full bg-[#252B37] text-white text-sm rounded-2xl pl-12 pr-4 py-4 border border-white/20 focus:outline-none focus:border-white/50 focus:bg-white/20 backdrop-blur-sm transition-all placeholder:text-white/50 text-[15px]"
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-12 object-contain pointer-events-none opacity-100"
      />
    </div>
  );
};

export default SearchBar;
