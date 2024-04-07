import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../reducers/productReducer'
import loginReducer from '../reducers/loginReducer'
import cartsReducer from '../reducers/cartsReducer'
import notificationReducer from '../reducers/notificationReducer'

const store = configureStore({
  reducer: {
    products: productReducer,
    user: loginReducer,
    cart: cartsReducer,
    notification: notificationReducer
  }
})

export default store
