import { useParams, useNavigate } from 'react-router-dom';

// Demo movies data
const DEMO_MOVIES: Record<number, any> = {
  1: {
    id: 1,
    title: 'Captain America: Brave New World',
    overview: 'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
    release_date: '2024-02-14',
    vote_average: 8.2,
    runtime: 124,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    director: 'Julius Onah',
    cast: ['Anthony Mackie', 'Danny Ramirez', 'Shira Haas', 'Xochitl Gomez'],
    budget: 320000000,
    revenue: 1200000000,
  },
  2: {
    id: 2,
    title: 'The Gorge',
    overview: 'Two elite soldiers must protect a mysterious president during a covert mission. As tensions rise, they uncover a conspiracy that threatens everything they know.',
    release_date: '2024-02-16',
    vote_average: 7.8,
    runtime: 110,
    genres: ['Action', 'Thriller', 'Drama'],
    director: 'Scott Beck, Bryan Woods',
    cast: ['Miles Teller', 'Anya Taylor-Joy', 'Oscar Isaac'],
    budget: 75000000,
    revenue: 450000000,
  },
  3: {
    id: 3,
    title: 'Mufasa: The Lion King',
    overview: 'Mufasa is a lion cub lost and alone trying to survive in the Pride Lands. With the help of a new friend, he embarks on an extraordinary journey to discover his destiny and become the king of the jungle.',
    release_date: '2024-12-20',
    vote_average: 8.5,
    runtime: 118,
    genres: ['Animation', 'Adventure', 'Family'],
    director: 'Barry Jenkins',
    cast: ['Aaron Pierre', 'Kelvin Harrison Jr.', 'Thandiwe Newton'],
    budget: 200000000,
    revenue: 1600000000,
  },
};

export function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  const movie = movieId ? DEMO_MOVIES[parseInt(movieId)] : null;

  if (!movie) {
    return (
      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
        <div style={{ textAlign: 'center', color: '#888' }}>
          <h1 style={{ color: 'white' }}>Movie not found</h1>
          <button 
            onClick={() => navigate('/')}
            style={{
              marginTop: '1rem',
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ flex: 1, width: '100%' }}>
      {/* Hero Section with Back Button */}
      <div style={{
        position: 'relative',
        height: '500px',
        backgroundColor: '#dc2626',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
          zIndex: 1
        }} />
        
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
        >
          ← Back
        </button>

        <div style={{ maxWidth: '600px', zIndex: 10 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0' }}>
            {movie.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: '600' }}>
              ⭐ {movie.vote_average.toFixed(1)}/10
            </span>
            <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
              {movie.release_date.split('-')[0]}
            </span>
            <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
              {movie.runtime} min
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {movie.genres.map((genre: string) => (
              <span
                key={genre}
                style={{
                  backgroundColor: 'rgba(220, 38, 38, 0.3)',
                  color: '#fca5a5',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem 2rem' }}>
        {/* Overview */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            Overview
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', maxWidth: '800px' }}>
            {movie.overview}
          </p>
        </section>

        {/* Details Grid */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            Details
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #333' }}>
              <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Director</p>
              <p style={{ color: 'white', fontWeight: '600' }}>{movie.director}</p>
            </div>
            <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #333' }}>
              <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Budget</p>
              <p style={{ color: 'white', fontWeight: '600' }}>${(movie.budget / 1000000).toFixed(0)}M</p>
            </div>
            <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #333' }}>
              <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Revenue</p>
              <p style={{ color: 'white', fontWeight: '600' }}>${(movie.revenue / 1000000).toFixed(0)}M</p>
            </div>
          </div>
        </section>

        {/* Cast */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            Cast
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            {movie.cast.map((actor: string) => (
              <div
                key={actor}
                style={{
                  backgroundColor: '#1a1a1a',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #333',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#262626';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(220, 38, 38, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <p style={{ color: 'white', fontWeight: '600', margin: '0' }}>
                  {actor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Actions */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
            >
              ❤️ Add to Favorites
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#dc2626',
                padding: '0.75rem 1.5rem',
                border: '1px solid #dc2626',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              📺 Watch Trailer
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
