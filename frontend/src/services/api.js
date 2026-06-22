import axios from 'axios'

// In production (Render), VITE_API_URL must point to the backend service.
// Fallback: use the deployed backend URL if env var is not set.
const BASE_URL = import.meta.env.VITE_API_URL
  || (import.meta.env.DEV ? '/api' : 'https://ai-career-twin.onrender.com/api')

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

export default api
