import Styles from './Notification.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeNotification())
  }

  const msgStyle = {
    color:
      notification && notification.type === 'success' ? '#00ff88' : '#ff8800'
  }

  return (
    <div
      style={msgStyle}
      className={
        notification ? Styles.notification_display : Styles.notification_hide
      }
    >
      <p>{notification && notification.message}</p>{' '}
      <span className={Styles.notification_remove} onClick={handleRemove}>
        <i className="fa-solid fa-xmark"></i>
      </span>
    </div>
  )
}

export default Notification
