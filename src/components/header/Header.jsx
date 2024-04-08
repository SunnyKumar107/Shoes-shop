import Styles from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { searchByText } from '../../reducers/productReducer'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import { useState } from 'react'
import User from './user/User'

function Header({ cartItems }) {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [showUserInfo, setShowUserInfo] = useState(false)

  const toggleShow = () => {
    setShowUserInfo(!showUserInfo)
  }

  if (!user) {
    return (
      <div className={Styles.header_without_user}>
        <div className={Styles.logo}>
          <img src="../../../shoesshop-logo.png" alt="shoes-shop-logo" />
        </div>
      </div>
    )
  }

  return (
    <div className={Styles.header}>
      <NavLink to={'/'}>
        <div className={Styles.logo}>
          <img src="../../../shoesshop-logo.png" alt="shoes-shop-logo" />
        </div>
      </NavLink>
      <div className={Styles.header_container}>
        <div className={Styles.header_search}>
          <input
            type="text"
            className={Styles.search_input}
            placeholder="Enter your search shoes"
            onChange={(e) => dispatch(searchByText(e.target.value))}
          />
        </div>
        <div className={Styles.right_side}>
          <NavLink to="/cart">
            {cartItems.length !== 0 && <span>{cartItems.length}</span>}
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <NavLink>
            {showUserInfo ? (
              <i className="fa-solid fa-xmark" onClick={toggleShow}></i>
            ) : (
              <i className="fa-solid fa-user" onClick={toggleShow}></i>
            )}
          </NavLink>
        </div>
      </div>
      {showUserInfo && <User />}
    </div>
  )
}

Header.propTypes = {
  cartItems: propTypes.array.isRequired
}

export default Header
