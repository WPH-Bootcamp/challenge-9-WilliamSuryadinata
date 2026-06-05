import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12">
      {/* Garis Pembatas Tipis */}
      <div className="border-t border-white/10 w-full"></div>

      {/* Container Konten Footer */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Kiri: Logo TV dan Tulisan 'Movie' */}
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Kotak TV Solid */}
              <rect x="2" y="8" width="20" height="14" rx="3" fill="white" />
              {/* Antena TV */}
              <path
                d="M15.5 3L12 8L8.5 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white font-bold text-xl tracking-wide">Movie</span>
          </div>

          {/* Kanan: Teks Copyright */}
          <p className="text-gray-400 text-sm md:text-base">Copyright ©2025 Movie Explorer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
