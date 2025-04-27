import axios from 'axios';

const API = axios.create({
  baseURL: 'https://b-2-ak4e.onrender.com/api', // Adjust if your backend uses a different port
});

// You can add Authorization token here later if needed
// API.interceptors.request.use((req) => {
//   req.headers.Authorization = `Bearer ${yourToken}`;
//   return req;
// });

export default API;
