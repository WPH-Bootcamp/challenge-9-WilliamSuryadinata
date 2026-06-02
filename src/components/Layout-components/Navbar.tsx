import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl hover:text-primary transition">
          🎬 Movie
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-primary transition">
            Home
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-2 text-sm hover:text-primary transition"
          >
            <Heart className="w-4 h-4" />
            <span>Favorites</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
