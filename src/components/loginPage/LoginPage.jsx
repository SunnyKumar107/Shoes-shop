import { NavLink, useNavigate } from 'react-router-dom'
import Styles from './LoginPage.module.css'
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import propTypes from 'prop-types'

const LoginPage = ({ onHandleLogin }) => {
  const [email, setEmail] = useState('')
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
    }, 1000)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1500)

    const user = await onHandleLogin({ email, password })
    if (user) {
      navigate('/')
    }
    setEmail('')
    setPassword('')
  }

  if (loader) {
    return (
      <div className={Styles.loader_login}>
        <Oval visible={true} width="50" color="#007bff" strokeWidth="4" />
      </div>
    )
  }

  return (
    <div className={Styles.login_container}>
      <form className={Styles.login_form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {notification && (
          <div className={Styles.auth_notification}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className={Styles.have_or_not}>
          <p>Don&apos;t have an account?</p>{' '}
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </div>
      </form>
    </div>
  )
}

LoginPage.propTypes = {
  onHandleLogin: propTypes.func.isRequired
}

export default LoginPage
