import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TMDB_IMAGE_BASE_URL, IMAGE_SIZES } from './constants';

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Construct full image URL from TMDB path
export function getImageUrl(path: string, type: 'poster' | 'backdrop' | 'profile' = 'poster', size: keyof typeof IMAGE_SIZES[typeof type] = 'medium'): string {
  if (!path) return '/placeholder-image.png';
  const sizeValue = IMAGE_SIZES[type][size];
  return `${TMDB_IMAGE_BASE_URL}/${sizeValue}${path}`;
}

// Format date
export function formatDate(dateString: string): string {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Format runtime in hours and minutes
export function formatRuntime(minutes: number): string {
  if (!minutes) return 'N/A';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

// Format currency
export function formatCurrency(amount: number): string {
  if (!amount) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
}

// Format rating with one decimal place
export function formatRating(rating: number): string {
  if (rating === undefined || rating === null) return 'N/A';
  return rating.toFixed(1);
}
