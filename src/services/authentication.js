import axios from 'axios'

const baseUrl = '/api/login'

const authentication = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default {
  authentication: authentication
}
