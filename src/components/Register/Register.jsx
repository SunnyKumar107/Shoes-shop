import React, { useEffect, useState } from 'react'
import Styles from './Register.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'
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

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
    const client = await onHandleRegister({ email, name, password })

    setLoader(false)
    if (client) {
      navigate('/login')
    }
    setEmail('')
    setName('')
    setPassword('')
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
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
          {loader ? (
            <TailSpin
              height="15"
              visible={true}
              width="100%"
              color="#fff"
              strokeWidth="4"
            />
          ) : (
            'Register'
          )}
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
