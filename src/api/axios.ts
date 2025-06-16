import axios from 'axios'

const CLIENT_ID = 'eQ84ayYsTHNDfKJ6j-BkaeuCg6IbOXgfqfnkzWiO6yQ'

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
})

export default axiosInstance
