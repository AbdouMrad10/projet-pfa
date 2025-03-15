import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_DOMAIN, // Replace with your backend's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('tokenData');
//     if (token) {
//       config.headers.Authorization = `Bearer ${JSON.parse(token)?.token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
