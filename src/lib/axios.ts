// TODO: Create axios instance with base configuration
// Hint: Use environment variables for API URL and API key
// Reference: https://axios-http.com/docs/instance

// TODO: Configure baseURL from environment variable
// TODO: Add default headers (API key, content-type)

// TODO: Add request interceptor if needed
// Hint: You can add API key to every request here

// TODO: Add response interceptor for error handling

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_BASE_URL || 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
