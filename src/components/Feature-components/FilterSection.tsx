import React, { useState } from 'react';

interface FilterSectionProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  year?: number;
  genre?: string;
  rating?: number;
  sortBy?: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({});

  const handleFilterChange = (newFilter: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilter };
    setFilters(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  return (
    <div className="w-full px-4 md:px-8 py-6 bg-black/20 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row gap-4">
        {/* Sort By */}
        <div className="flex-1">
          <label className="block text-white text-sm font-medium mb-2">Sort By</label>
          <select
            value={filters.sortBy || 'popularity'}
            onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="popularity">Popularity</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Rating Filter */}
        <div className="flex-1">
          <label className="block text-white text-sm font-medium mb-2">Rating</label>
          <select
            value={filters.rating || 0}
            onChange={(e) => handleFilterChange({ rating: Number(e.target.value) })}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>All Ratings</option>
            <option value={7}>7+</option>
            <option value={7.5}>7.5+</option>
            <option value={8}>8+</option>
          </select>
        </div>

        {/* Year Filter */}
        <div className="flex-1">
          <label className="block text-white text-sm font-medium mb-2">Year</label>
          <select
            value={filters.year || 0}
            onChange={(e) => handleFilterChange({ year: Number(e.target.value) || undefined })}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>All Years</option>
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
