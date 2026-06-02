import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[v0] API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
