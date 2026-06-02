import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages/HomePage';
import { MovieDetailPage } from './pages/MovieDetailPage';

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#000000' }}>
        {/* Navbar */}
        <nav style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 50, 
          borderBottom: '1px solid #333', 
          backgroundColor: '#111111',
          padding: '1rem 2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1280px', margin: '0 auto' }}>
            <div 
              style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                color: '#ffffff',
                cursor: 'pointer'
              }}
              onClick={() => window.location.href = '/'}
            >
              🎬 Movie
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.875rem' }}>Home</a>
              <a href="#favorites" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>❤️ Favorites</a>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        </Routes>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #333', marginTop: '3rem', backgroundColor: '#0a0a0a', padding: '2rem' }}>
          <div style={{ textAlign: 'center', color: '#888', fontSize: '0.875rem' }}>
            <p style={{ margin: 0 }}>&copy; 2024 Movie Explorer. Powered by TMDB.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
