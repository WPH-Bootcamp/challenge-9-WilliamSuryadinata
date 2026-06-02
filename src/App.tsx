import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Lazy import components to debug
import { Layout } from '@/components/Layout-components/Layout';
import { HomePage } from '@/pages/HomePage';
import { MovieDetailPage } from '@/pages/MovieDetailPage';

function App() {
  try {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    );
  } catch (error) {
    console.error('[v0] Error rendering App:', error);
    return <div>Error: {String(error)}</div>;
  }
}

export default App;
