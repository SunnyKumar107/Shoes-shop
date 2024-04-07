import Styles from './Notification.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../../reducers/notificationReducer'
import { useEffect, useState } from 'react'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (notification) {
      setMsg(notification.message)
    }
  }, [notification])

  const handleRemove = () => {
    dispatch(removeNotification())
  }

  return (
    <div
      className={
        notification ? Styles.notification_display : Styles.notification_hide
      }
    >
      <p>{msg}</p>{' '}
      <span className={Styles.notification_remove} onClick={handleRemove}>
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  )
}

export default Notification
