import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#000000' }}>
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: '#333', backgroundColor: '#111111' }}>
        <div className="mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', textDecoration: 'none' }}>
            🎬 Movie
          </Link>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/" style={{ fontSize: '0.875rem', color: '#ffffff', textDecoration: 'none' }}>
              Home
            </Link>

            <Link to="/favorites" style={{ fontSize: '0.875rem', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ❤️ Favorites
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 mx-auto w-full px-4 py-8">
        {children}
      </main>

      <footer style={{ borderTop: '1px solid #333', marginTop: '3rem', backgroundColor: '#0a0a0a' }}>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
          <p>&copy; 2024 Movie Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
