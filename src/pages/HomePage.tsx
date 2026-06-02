import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Demo movies for display
const DEMO_MOVIES = [
  {
    id: 1,
    title: 'Captain America: Brave New World',
    overview: 'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident.',
    release_date: '2024-02-14',
    vote_average: 8.2,
  },
  {
    id: 2,
    title: 'The Gorge',
    overview: 'Two elite soldiers must protect a mysterious president during a covert mission.',
    release_date: '2024-02-16',
    vote_average: 7.8,
  },
  {
    id: 3,
    title: 'Mufasa: The Lion King',
    overview: 'Mufasa is a lion cub lost and alone trying to survive in the Pride Lands.',
    release_date: '2024-12-20',
    vote_average: 8.5,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const movieCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export function HomePage() {
  const navigate = useNavigate();
  const displayHeroMovie = DEMO_MOVIES[0];
  const displayPopular = DEMO_MOVIES.slice(1);
  const displayNew = DEMO_MOVIES;

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}
    >
      {/* Hero Section */}
      {displayHeroMovie && (
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            position: 'relative',
            height: '400px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            marginBottom: '3rem',
            backgroundColor: '#dc2626',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '2rem',
            cursor: 'pointer'
          }}
          onClick={() => handleMovieClick(displayHeroMovie.id)}
          whileHover={{ filter: 'brightness(0.95)' }}
          transition={{ duration: 0.3 }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
            zIndex: 1
          }} />
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ maxWidth: '600px', zIndex: 10 }}
          >
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
            <motion.button 
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
              whileHover={{ backgroundColor: '#b91c1c', scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              ▶ View Details
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Trending Now */}
      {displayPopular.length > 0 && (
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '3rem' }}
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}
          >
            Trending Now
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1rem'
            }}
          >
            {displayPopular.map((movie) => (
              <motion.div 
                key={movie.id}
                variants={movieCardVariants}
                whileHover="hover"
                style={{
                  aspectRatio: '2 / 3',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid #333',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => handleMovieClick(movie.id)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '1rem 0.5rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  {movie.title}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* New Release */}
      {displayNew.length > 0 && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}
          >
            New Release
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1rem'
            }}
          >
            {displayNew.map((movie) => (
              <motion.div 
                key={movie.id}
                variants={movieCardVariants}
                whileHover="hover"
                style={{
                  aspectRatio: '2 / 3',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid #333',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => handleMovieClick(movie.id)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '1rem 0.5rem 0.5rem',
                    fontSize: '0.75rem',
                    color: '#ffffff',
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  {movie.title}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.main>
  );
}
