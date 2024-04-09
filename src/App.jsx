import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import ProductDetails from './components/productDetails/ProductDetails'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProducts } from './reducers/productReducer'
import LoginPage from './components/loginPage/LoginPage'
import { initializeUser, loginUser } from './reducers/loginReducer'
import { initializeCarts } from './reducers/cartsReducer'
import Register from './components/Register/Register'
import usersService from './services/users'
import Cart from './components/productCart/Cart'
import Notification from './components/Notification/Notification'
import { addNotification } from './reducers/notificationReducer'

function App() {
  const products = useSelector((state) => state.products)
  const cartItems = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeProducts())
    dispatch(initializeUser())
    dispatch(initializeCarts())
  }, [dispatch])

  const handleLogin = async ({ email, password }) => {
    try {
      const client = await dispatch(
        loginUser({ email: email, password: password })
      )
      if (client) {
        dispatch(addNotification(`Logged in ${client.name}!`, 'success', 5))
      }
      return client
    } catch (error) {
      dispatch(addNotification('Invalid credentials', 'authError', 5))
    }
  }

  const handleRegister = async ({ email, name, password }) => {
    try {
      const newUser = await usersService.create({
        email: email,
        name: name,
        password: password
      })
      dispatch(addNotification('Account created!', 'success', 5))
      return newUser
    } catch (error) {
      dispatch(addNotification('Some error happend', 'authError', 5))
    }
  }

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Notification />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={<LoginPage onHandleLogin={handleLogin} />}
        />
        <Route
          path="/register"
          element={<Register onHandleRegister={handleRegister} />}
        />
      </Routes>
    </Router>
  )
}

export default App
