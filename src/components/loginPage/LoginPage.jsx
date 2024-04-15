import { NavLink, useNavigate } from 'react-router-dom'
import Styles from './LoginPage.module.css'
import { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import propTypes from 'prop-types'

const LoginPage = ({ onHandleLogin }) => {
  const [email, setEmail] = useState('')
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

    const user = await onHandleLogin({ email, password })
    setLoader(false)
    if (user) {
      navigate('/')
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className={Styles.login_container}>
      <form className={Styles.login_form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {notification && notification.type === 'authError' && (
          <div className={Styles.auth_notification}>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={Styles.login_btn} type="submit">
          {loader ? (
            <TailSpin
              height="15"
              visible={true}
              width="100%"
              color="#fff"
              strokeWidth="4"
            />
          ) : (
            'Login'
          )}
        </button>
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
