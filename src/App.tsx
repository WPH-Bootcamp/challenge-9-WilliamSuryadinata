import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import FavoritePage from './pages/FavoritePage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Utama ke HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Rute ke halaman Detail */}
        <Route path="/detail" element={<MovieDetailPage />} />

        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
