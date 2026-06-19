import api from './api'
export const predict = (data) => api.post('/predict', data)
