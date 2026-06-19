import api from './api'
export const getProfile  = ()       => api.get('/profile')
export const saveProfile = (data)   => api.post('/profile', data)
