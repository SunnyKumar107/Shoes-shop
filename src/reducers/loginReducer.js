import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/authentication'

const loginSlice = createSlice({
  name: 'authentication',
  initialState: null,
  reducers: {
    userInit(state, action) {
      return action.payload
    },
    login(state, action) {
      return action.payload
    },
    logout() {
      return null
    }
  }
})

export const { userInit, login, logout } = loginSlice.actions

export const initializeUser = () => {
  return async (dispatch) => {
    const loggedUserJson = window.localStorage.getItem('loggedInShopAppUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      dispatch(userInit(user))
    }
  }
}

export const loginUser = (authData) => {
  return async (dispatch) => {
    const user = await loginService.authentication(authData)
    dispatch(login(user))
    window.localStorage.setItem('loggedInShopAppUser', JSON.stringify(user))

    return user
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedInShopAppUser')
    dispatch(logout())
  }
}

export default loginSlice.reducer
