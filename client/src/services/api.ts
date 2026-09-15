import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})

export const registerUser = async (userData: {
  name: string
  email: string
  password: string
  university?: string
  campus?: string
}) => {
  const response = await api.post('/auth/register', userData)

  return response.data
}

export const loginUser = async (userData: {
  email: string
  password: string
}) => {
  const response = await api.post('/auth/login', userData)

  return response.data
}

export default api