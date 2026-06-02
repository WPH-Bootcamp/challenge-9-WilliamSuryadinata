import { useEffect, useState } from 'react';
import './index.css';
import { movieService } from '@/services/movieService';

// Demo movies for display when API is unavailable
const DEMO_MOVIES = [
  {
    id: 1,
    title: 'Captain America: Brave New World',
    overview: 'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident.',
    poster_path: '/placeholder.jpg',
    backdrop_path: '/placeholder.jpg',
    release_date: '2024-02-14',
    vote_average: 8.2,
  },
  {
    id: 2,
    title: 'The Gorge',
    overview: 'Two elite soldiers must protect a mysterious president during a covert mission.',
    poster_path: '/placeholder.jpg',
    backdrop_path: '/placeholder.jpg',
    release_date: '2024-02-16',
    vote_average: 7.8,
  },
  {
    id: 3,
    title: 'Mufasa: The Lion King',
    overview: 'Mufasa is a lion cub lost and alone trying to survive in the Pride Lands.',
    poster_path: '/placeholder.jpg',
    backdrop_path: '/placeholder.jpg',
    release_date: '2024-12-20',
    vote_average: 8.5,
  },
];

export default function App() {
  const [popularMovies, setPopularMovies] = useState(DEMO_MOVIES);
  const [newReleaseMovies, setNewReleaseMovies] = useState(DEMO_MOVIES);
  const [heroMovie, setHeroMovie] = useState(DEMO_MOVIES[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [popular, nowPlaying] = await Promise.all([
          movieService.getPopularMovies(1),
          movieService.getNowPlayingMovies(1),
        ]);

        if (popular.results && popular.results.length > 0) {
          setPopularMovies(popular.results);
          setHeroMovie(popular.results[0]);
        }
        
        if (nowPlaying.results && nowPlaying.results.length > 0) {
          setNewReleaseMovies(nowPlaying.results);
        }
      } catch (err) {
        console.error('[v0] Error fetching movies:', err);
        setError('Using demo data. Set VITE_TMDB_API_KEY in .env to load real data from TMDB.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const displayHeroMovie = heroMovie;
  const displayPopular = popularMovies.slice(1, 9);
  const displayNew = newReleaseMovies.slice(0, 12);

  return (
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
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff' }}>
            🎬 Movie
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.875rem' }}>Home</a>
            <a href="#favorites" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>❤️ Favorites</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
        {error && (
          <div style={{ backgroundColor: '#1f2937', color: '#93c5fd', padding: '1rem', borderRadius: '0.5rem', marginBottom: '2rem', border: '1px solid #374151', fontSize: '0.875rem' }}>
            {error}
          </div>
        )}

        {/* Hero Section */}
        {displayHeroMovie && (
          <div style={{ 
            position: 'relative',
            height: '400px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            marginBottom: '3rem',
            backgroundColor: '#dc2626',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '2rem'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
              zIndex: 1
            }} />
            
            <div style={{ maxWidth: '600px', zIndex: 10 }}>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0' }}>
                {displayHeroMovie.title}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: '#fbbf24', fontSize: '0.875rem' }}>⭐ {displayHeroMovie.vote_average?.toFixed(1)}/10</span>
                {displayHeroMovie.release_date && (
                  <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{displayHeroMovie.release_date.split('-')[0]}</span>
                )}
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 1.5rem 0', lineHeight: '1.6', maxWidth: '500px' }}>
                {displayHeroMovie.overview?.substring(0, 200)}...
              </p>
              <button style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem'
              }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'} 
                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}>
                ▶ Watch Trailer
              </button>
            </div>
          </div>
        )}

        {/* Trending Now */}
        {displayPopular.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
              Trending Now
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1rem'
            }}>
              {displayPopular.map((movie) => (
                <div key={movie.id} style={{
                  aspectRatio: '2 / 3',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  border: '1px solid #333',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '1rem 0.5rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    textAlign: 'center'
                  }}>
                    {movie.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* New Release */}
        {displayNew.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
              New Release
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1rem'
            }}>
              {displayNew.map((movie) => (
                <div key={movie.id} style={{
                  aspectRatio: '2 / 3',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  border: '1px solid #333',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '1rem 0.5rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    textAlign: 'center'
                  }}>
                    {movie.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #333', marginTop: '3rem', backgroundColor: '#0a0a0a', padding: '2rem' }}>
        <div style={{ textAlign: 'center', color: '#888', fontSize: '0.875rem' }}>
          <p style={{ margin: 0 }}>&copy; 2024 Movie Explorer. Powered by TMDB.</p>
        </div>
      </footer>
    </div>
  );
}
