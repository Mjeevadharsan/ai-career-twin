import axios from 'axios'

// Determine the backend root URL (without /api).
// VITE_API_URL may or may not include /api — we strip it and re-append to be safe.
const BACKEND_ROOT = (
  import.meta.env.VITE_API_URL
  || (import.meta.env.DEV ? 'http://localhost:5000' : 'https://ai-career-twin.onrender.com')
).replace(/\/api\/?$/, '').replace(/\/$/, '')

// All controller routes live under /api
const BASE_URL = `${BACKEND_ROOT}/api`

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

export default api
