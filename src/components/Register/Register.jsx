import React, { useEffect, useState } from 'react'
import Styles from './Register.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import propTypes from 'prop-types'

const Register = ({ onHandleRegister }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const notification = useSelector((state) => state.notification)
  const user = useSelector((state) => state.user)

  if (user) {
    navigate('/')
    return null
  }

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 500)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1500)
    const client = await onHandleRegister({ email, name, password })

    if (client) {
      navigate('/login')
    }
    setEmail('')
    setName('')
    setPassword('')
  }

  if (loader) {
    return (
      <div className={Styles.loader_register}>
        <Oval visible={true} width="50" color="#007bff" strokeWidth="4" />
      </div>
    )
  }

  return (
    <div className={Styles.register_container}>
      <form className={Styles.register_form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        {notification && notification.type === 'authError' && (
          <div className={Styles.register_notification}>
            <p>{notification.message}</p>
          </div>
        )}
        <div className={Styles.input_group}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={Styles.input_group}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={Styles.input_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={Styles.register_btn} type="submit">
          Register
        </button>
        <div className={Styles.have_or_not}>
          <p>Already have an account?</p>{' '}
          <NavLink to="/login">
            <span>Log in</span>
          </NavLink>
        </div>
      </form>
    </div>
  )
}

Register.propTypes = {
  onHandleRegister: propTypes.func.isRequired
}

export default Register
