import api from './api'
export const getRecommendations = (data) => api.post('/predict', data)
