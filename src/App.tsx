import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import FavoritePage from './pages/FavoritePage';
import SearchPage from './pages/SearchPage'; // <-- 1. Import SearchPage
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<MovieDetailPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/search" element={<SearchPage />} /> {/* <-- 2. Tambahkan Route Search */}
      </Routes>
    </Router>
  );
}

export default App;
