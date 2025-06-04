import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7136', // Update to match your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
