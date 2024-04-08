import { useDispatch, useSelector } from 'react-redux'
import Styles from './User.module.css'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../../reducers/loginReducer'

const User = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logoutLoad, setLogoutLoad] = useState(false)
  const [delLoad, setDelLoad] = useState(false)

  const handleLogout = async () => {
    setLogoutLoad(true)
    setTimeout(() => {
      dispatch(logoutUser())
      navigate('/login')
      setLogoutLoad(false)
    }, 1000)
  }

  const handleDeleteAccount = () => {
    setDelLoad(true)
    setTimeout(() => {
      setDelLoad(false)
    }, 1000)
  }

  return (
    <div className={Styles.login_user}>
      <p>Name</p>
      <h3>{user.name}</h3>
      <p>Email</p>
      <h3>{user.email}</h3>
      <button onClick={handleLogout} className={Styles.logout_btn}>
        <span>
          {logoutLoad ? (
            <TailSpin
              height="15"
              visible={true}
              width="90%"
              color="#fff"
              strokeWidth="4"
            />
          ) : (
            <i className="fa-solid fa-power-off"></i>
          )}
        </span>{' '}
        Logout
      </button>
      <button onClick={handleDeleteAccount} className={Styles.del_account_btn}>
        {delLoad ? (
          <TailSpin
            height="15"
            visible={true}
            width="90%"
            color="#ff0000"
            strokeWidth="4"
          />
        ) : (
          'Delete Account'
        )}
      </button>
    </div>
  )
}

export default User
