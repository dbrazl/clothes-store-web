import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

export const api2 = axios.create({
  baseURL: 'http://localhost:3000'
})

export default api
