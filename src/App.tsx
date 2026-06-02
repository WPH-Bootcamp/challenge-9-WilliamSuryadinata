import './index.css';

export default function App() {
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
        {/* Hero Section */}
        <div style={{ 
          position: 'relative',
          height: '400px',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          marginBottom: '3rem',
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '2rem'
        }}>
          <div style={{ maxWidth: '600px', zIndex: 10 }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0' }}>
              Captain America: Brave New World
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: '#fbbf24', fontSize: '0.875rem' }}>⭐ 8.2/10</span>
              <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>2024</span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
              After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.
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

        {/* Trending Now */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
            Trending Now
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '1rem'
          }}>
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} style={{
                aspectRatio: '2 / 3',
                backgroundColor: '#1a1a1a',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                border: '1px solid #333'
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Trending {i}
              </div>
            ))}
          </div>
        </div>

        {/* New Release */}
        <div>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
            New Release
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '1rem'
          }}>
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} style={{
                aspectRatio: '2 / 3',
                backgroundColor: '#1a1a1a',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                border: '1px solid #333'
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Release {i+1}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #333', marginTop: '3rem', backgroundColor: '#0a0a0a', padding: '2rem' }}>
        <div style={{ textAlign: 'center', color: '#888', fontSize: '0.875rem' }}>
          <p style={{ margin: 0 }}>&copy; 2024 Movie Explorer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
