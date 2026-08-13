import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const getApiStatus = async () => {
  const response = await api.get('/')
  return response.data
}

export default api