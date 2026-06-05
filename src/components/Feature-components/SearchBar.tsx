import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icon/search.png';

interface SearchBarProps {
  onSearchChange?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Mengambil nilai awal dari URL
  const initialQuery = searchParams.get('q') || '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (onSearchChange) {
      onSearchChange(value);
    }

    if (value.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm">
      <input
        key={initialQuery}
        type="text"
        defaultValue={initialQuery}
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
