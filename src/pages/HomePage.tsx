import { useState } from 'react';
import { usePopularMovies } from '@/hooks/useMovies';
import { MovieGrid } from '@/components/Feature-components/MovieGrid';
import { SearchBar } from '@/components/Feature-components/SearchBar';
import { FilterSection } from '@/components/Feature-components/FilterSection';

export function HomePage() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'release_date'>('popular');
  
  try {
    const { data, isLoading, isError } = usePopularMovies(page);

    if (isError) {
      return (
        <div className="text-center py-12">
          <p className="text-red-500">Error loading movies. Please try again.</p>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <SearchBar />
        <FilterSection sortBy={sortBy} onSortChange={setSortBy} />
        <MovieGrid movies={data?.results || []} isLoading={isLoading} />
        
        {/* Pagination */}
        <div className="flex justify-center gap-4 py-8">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {page}</span>
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('[v0] Error in HomePage:', error);
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error rendering page: {String(error)}</p>
      </div>
    );
  }
}
