import api from './api'
export const login    = (u, p) => api.post('/login',    { username: u, password: p })
export const register = (u, p) => api.post('/register', { username: u, password: p })
export const logout   = ()      => api.post('/logout')
