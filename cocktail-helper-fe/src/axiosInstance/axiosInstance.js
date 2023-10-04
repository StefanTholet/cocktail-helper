import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

const user = JSON.parse(localStorage.getItem('user'))
const token = user ? user.token : null

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default axiosInstance
