import React from 'react';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/icon/Star.png';

interface MovieCardProps {
  title: string;
  image: string;
  rating: string;
  rank?: number; // Jika ada, tampilkan lingkaran nomor
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, rating, rank }) => {
  return (
    <Link to="/detail" className="flex flex-col group cursor-pointer">
      {/* Poster & Lingkaran Urutan */}
      <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {rank && (
          <div className="absolute top-2 left-2 w-7 h-7 md:w-12 md:h-12 bg-[#0A0D1299] backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
            <span className="text-white font-bold text-xs md:text-sm">{rank}</span>
          </div>
        )}
      </div>

      {/* Judul Film */}
      <h3 className="text-white font-semibold text-sm md:text-base truncate">{title}</h3>

      {/* Rating Bintang */}
      <div className="flex items-center space-x-1.5 mt-1">
        <img src={starIcon} alt="Star" className="w-3.5 h-3.5 object-contain" />
        <span className="text-[#A4A7AE] text-xs md:text-sm font-medium">{rating}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
