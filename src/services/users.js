import axios from 'axios'

const baseUrl = '/api/users'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const config = () => ({
  headers: {
    Authorization: token
  }
})

const create = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

const deleteUser = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config())
  return response.data
}

export default {
  create,
  setToken,
  deleteUser
}
