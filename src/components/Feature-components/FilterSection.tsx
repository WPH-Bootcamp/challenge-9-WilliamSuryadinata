import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

interface FilterSectionProps {
  sortBy: 'popular' | 'rating' | 'release_date';
  onSortChange: (sort: 'popular' | 'rating' | 'release_date') => void;
}

export function FilterSection({ sortBy, onSortChange }: FilterSectionProps) {
  const sorts: Array<{ value: 'popular' | 'rating' | 'release_date'; label: string }> = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'release_date', label: 'Latest Release' },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="flex items-center gap-2 text-muted-foreground">
        <ArrowUpDown className="w-4 h-4" />
        Sort by:
      </span>
      {sorts.map((sort) => (
        <Button
          key={sort.value}
          variant={sortBy === sort.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSortChange(sort.value)}
        >
          {sort.label}
        </Button>
      ))}
    </div>
  );
}
