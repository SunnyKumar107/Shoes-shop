import React, { useEffect, useState } from 'react'
import Styles from './Cart.module.css'
import { NavLink } from 'react-router-dom'
import {
  initializeCarts,
  orderPlaced,
  removeItem
} from '../../reducers/cartsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { TailSpin } from 'react-loader-spinner'
import { addNotification } from '../../reducers/notificationReducer'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const [removeLoad, setRemoveLoad] = useState(false)
  const [orderLoad, setOrderLoad] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeCarts)
  }, [dispatch])

  if (cartItems.length === 0) {
    return (
      <div className={Styles.empty_cart}>
        <h1>No items found!</h1>
        <p>
          Explore our amazing products and start filling it with items you love!
        </p>
        <NavLink to="/">
          <i className="fa-sharp fa-solid fa-arrow-left"></i> <p>Home</p>
        </NavLink>
      </div>
    )
  }

  const handleRemoveToCart = (id) => {
    setRemoveLoad(true)

    setTimeout(() => {
      setRemoveLoad(false)
      dispatch(removeItem(id))
      dispatch(addNotification('Product removed from the cart', 'success', 5))
    }, 1000)
  }

  const handlePlaceOrder = () => {
    setOrderLoad(true)

    setTimeout(() => {
      setOrderLoad(false)
      dispatch(orderPlaced())
      dispatch(addNotification('Order successfully placed!', 'success', 5))
    }, 1000)
  }

  const priceInNumber = cartItems.map((e) => Number(e.newPrice))
  const cartTotal = priceInNumber.reduce((a, b) => a + b, 0)
  const discount = (cartTotal * 10) / 100
  const tax = (cartTotal * 15) / 100

  const orderTotal = cartTotal - discount + tax

  return (
    <div className={Styles.cart}>
      <header>
        <div className={Styles.go_back}>
          <NavLink to="/">
            <i className="fa-sharp fa-solid fa-arrow-left"></i> <p>Home</p>
          </NavLink>
        </div>
      </header>
      <section>
        <div>
          <h1>Review Items in Your Cart</h1>
          <p>
            Take a moment to review the items in your cart before placing order.
          </p>
        </div>
        <div className={Styles.cart_container}>
          <div className={Styles.cart_items}>
            {cartItems.map((e) => (
              <div key={e.id} className={Styles.product_in_cart}>
                <div className={Styles.img_container}>
                  <img src={e.img} alt={e.img} />
                </div>
                <div className={Styles.info_container}>
                  <h3>{e.title}</h3>
                  <div className={Styles.price_rating}>
                    <p>${e.newPrice}</p>{' '}
                    <span>
                      <i className="fa-regular fa-star"></i> {e.star}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemoveToCart(e.id)}
                    className={Styles.remove_to_cart}
                  >
                    {removeLoad ? (
                      <TailSpin
                        height="15"
                        visible={true}
                        width="100%"
                        color="#fff"
                        strokeWidth="4"
                      />
                    ) : (
                      'Remove to Cart'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={Styles.price_detail}>
            <h2>Price Details</h2>
            <div className={Styles.detail_container}>
              <div className={Styles.list_type}>
                Cart Total <span>${cartTotal}</span>
              </div>
              <div className={Styles.list_type}>
                Cart Discount <span>{discount}</span>
              </div>
              <div className={Styles.list_type}>
                Delivery <span>0</span>
              </div>
              <div className={Styles.list_type}>
                Tax <span>{tax}</span>
              </div>
              <div className={Styles.order_total}>
                Order Total <span>${orderTotal}</span>
              </div>
            </div>
            <button onClick={handlePlaceOrder} className={Styles.place_order}>
              {orderLoad ? (
                <TailSpin
                  height="15"
                  visible={true}
                  width="100%"
                  color="#fff"
                  strokeWidth="4"
                />
              ) : (
                'Place Order'
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
