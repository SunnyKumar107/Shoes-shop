import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/products`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getAll
}
