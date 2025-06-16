import axios from 'axios'

const CLIENT_ID = '6wnesVmBJjvQ3b_V_zCj6z3VT5BOKrHYt0QK9_-5ebU'

const axiosInstance = axios.create({
  baseURL: `https://unsplash.com/photos/random?client_id=${CLIENT_ID}`,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
