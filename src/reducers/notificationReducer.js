import { createSlice } from '@reduxjs/toolkit'

const notificatonSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    deleteNotification() {
      return null
    }
  }
})

export const { setNotification, deleteNotification } = notificatonSlice.actions

export const addNotification = (message, type, time) => {
  return async (dispatch) => {
    dispatch(setNotification({ message: message, type: type }))

    setTimeout(() => {
      dispatch(deleteNotification())
    }, 1000 * time)
  }
}

export const removeNotification = () => {
  return async (dispatch) => {
    dispatch(deleteNotification())
  }
}

export default notificatonSlice.reducer
