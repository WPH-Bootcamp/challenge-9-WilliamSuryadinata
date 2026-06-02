import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const castCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2,
    },
  },
};

export function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  const movie = movieId ? DEMO_MOVIES[parseInt(movieId)] : null;

  if (!movie) {
    return (
      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ textAlign: 'center', color: '#888' }}
        >
          <h1 style={{ color: 'white' }}>Movie not found</h1>
          <motion.button 
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
            whileHover={{ backgroundColor: '#b91c1c', scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </main>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ flex: 1, width: '100%' }}
    >
      {/* Hero Section with Back Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          height: '500px',
          backgroundColor: '#dc2626',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '2rem',
          marginBottom: '2rem'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
          zIndex: 1
        }} />
        
        <motion.button
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
            zIndex: 10
          }}
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ maxWidth: '600px', zIndex: 10 }}
        >
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}
          >
            {movie.genres.map((genre: string, index: number) => (
              <motion.span
                key={genre}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
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
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem 2rem' }}>
        {/* Overview */}
        <motion.section 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '3rem' }}
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}
          >
            Overview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', maxWidth: '800px' }}
          >
            {movie.overview}
          </motion.p>
        </motion.section>

        {/* Details Grid */}
        <motion.section 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '3rem' }}
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}
          >
            Details
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {[
              { label: 'Director', value: movie.director },
              { label: 'Budget', value: `$${(movie.budget / 1000000).toFixed(0)}M` },
              { label: 'Revenue', value: `$${(movie.revenue / 1000000).toFixed(0)}M` }
            ].map((detail, index) => (
              <motion.div
                key={detail.label}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #333' }}
              >
                <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{detail.label}</p>
                <p style={{ color: 'white', fontWeight: '600' }}>{detail.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Cast */}
        <motion.section 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '3rem' }}
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}
          >
            Cast
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '1rem'
            }}
          >
            {movie.cast.map((actor: string) => (
              <motion.div
                key={actor}
                variants={castCardVariants}
                whileHover="hover"
                style={{
                  backgroundColor: '#1a1a1a',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #333',
                  textAlign: 'center'
                }}
              >
                <p style={{ color: 'white', fontWeight: '600', margin: '0' }}>
                  {actor}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Related Actions */}
        <motion.section 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: '3rem' }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
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
            >
              ❤️ Add to Favorites
            </motion.button>
            <motion.button
              style={{
                backgroundColor: 'transparent',
                color: '#dc2626',
                padding: '0.75rem 1.5rem',
                border: '1px solid #dc2626',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}
              whileHover={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              📺 Watch Trailer
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
