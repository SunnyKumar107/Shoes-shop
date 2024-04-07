import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import CardContainer from './components/cardContainer/CardContainer'
import ProductDetails from './components/productDetails/ProductDetails'
import { useSelector, useDispatch } from 'react-redux'
import { initializeProducts } from './reducers/productReducer'
import LoginPage from './components/loginPage/LoginPage'
import { initializeUser, loginUser, logoutUser } from './reducers/loginReducer'
import { initializeCarts } from './reducers/cartsReducer'
import Register from './components/Register/Register'
import usersService from './services/users'
import Cart from './components/productCart/Cart'
import Notification from './components/Notification/Notification'
import { addNotification } from './reducers/notificationReducer'

function App() {
  const products = useSelector((state) => state.products)
  const user = useSelector((state) => state.user)
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
      dispatch(addNotification('Invalid credentials', 'error', 5))
    }
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const handleRegister = async ({ email, name, password }) => {
    try {
      const newUser = await usersService.create({
        email: email,
        name: name,
        password: password
      })
      return newUser
    } catch (error) {
      dispatch(addNotification('Some error happend', 'error', 5))
    }
  }

  if (!user) {
    return (
      <Router>
        <Routes>
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

  return (
    <Router>
      <Header cartItems={cartItems} onHandleLogout={handleLogout} />
      <Notification />
      <Routes>
        <Route path="/" element={<CardContainer products={products} />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
