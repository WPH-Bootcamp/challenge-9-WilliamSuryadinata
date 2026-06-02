import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearchMovies } from '@/hooks/useMovies';
import { useMovieStore } from '@/store/movieStore';
import { MovieGrid } from './MovieGrid';
import { Search, X } from 'lucide-react';

const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
});

type SearchForm = z.infer<typeof searchSchema>;

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
  });

  const query = watch('query');
  const { data, isLoading } = useSearchMovies(query, 1, isSearching);
  const { addToSearchHistory } = useMovieStore();

  const onSubmit = useCallback((data: SearchForm) => {
    setSearchQuery(data.query);
    setIsSearching(true);
    addToSearchHistory(data.query);
  }, [addToSearchHistory]);

  const clearSearch = () => {
    reset();
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            {...register('query')}
            placeholder="Search movies..."
            className="pl-10"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          Search
        </Button>
        {isSearching && (
          <Button variant="outline" onClick={clearSearch}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </form>

      {isSearching && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Search Results for "{searchQuery}"
          </h2>
          <MovieGrid movies={data?.results || []} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}
