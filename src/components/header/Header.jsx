import Styles from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { searchByText } from '../../reducers/productReducer'
import { NavLink, useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'

function Header({ cartItems, onHandleLogout }) {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await onHandleLogout()
    navigate('/login')
  }

  return (
    <div className={Styles.header}>
      <NavLink to={'/'}>
        <div className={Styles.logo}>
          <img src="../../../shoesshop-logo.png" alt="shoes-shop-logo" />
        </div>
      </NavLink>
      {user ? (
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
              <i
                className="fa-solid fa-right-from-bracket"
                onClick={handleLogout}
              ></i>
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  )
}

Header.propTypes = {
  cartItems: propTypes.array.isRequired,
  onHandleLogout: propTypes.func.isRequired
}

export default Header
