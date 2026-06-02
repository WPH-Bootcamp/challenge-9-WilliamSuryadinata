export function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative',
        height: '400px',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        backgroundColor: 'linear-gradient(to right, #dc2626, #991b1b)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ zIndex: 10 }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white', margin: '0 0 1rem 0' }}>
            Captain America: Brave New World
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
            Discover amazing movies
          </p>
          <button style={{
            marginTop: '2rem',
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Trending Section */}
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
          Trending Now
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{
              aspectRatio: '2 / 3',
              backgroundColor: '#1a1a1a',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888'
            }}>
              Movie {i}
            </div>
          ))}
        </div>
      </div>

      {/* New Release Section */}
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
          New Release
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
            <div key={i} style={{
              aspectRatio: '2 / 3',
              backgroundColor: '#1a1a1a',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888'
            }}>
              New {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
