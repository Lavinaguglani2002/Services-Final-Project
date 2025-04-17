import axios from 'axios';

let baseURL = '';

if (process.env.NODE_ENV === 'production') {

  baseURL = process.env.REACT_APP_URL;  
} else {
  
  baseURL = 'http://localhost:8000/api';
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
