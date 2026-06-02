import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl hover:text-primary transition">
          🎬 Movie Explorer
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">
            <button>Home</button>
          </Link>
          
          <span className="text-sm text-muted-foreground">
            Favorites
          </span>
        </div>
      </div>
    </nav>
  );
}
