import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import Styles from './ProductDetails.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { initializeProducts } from '../../reducers/productReducer'
import { updateCart } from '../../reducers/cartsReducer'
import { TailSpin } from 'react-loader-spinner'
import { addNotification } from '../../reducers/notificationReducer'

function ProductDetails() {
  const user = useSelector((state) => state.user)
  const products = useSelector((state) => state.products)
  const cart = useSelector((state) => state.cart)
  const [cartLoad, setCartLoad] = useState(false)
  const [buyLoad, setBuyLoad] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
    return null
  }

  const id = useParams().id
  const product = products.find((p) => p.id === id)

  const similarProduct = products.filter((p) => p.category === product.category)

  if (!product) {
    return null
  }

  const productInCart = cart.find((p) => p.id === product.id)

  const handleAddToCart = () => {
    setCartLoad(true)
    setTimeout(() => {
      setCartLoad(false)
      dispatch(addNotification('Product added to the cart', 'success', 5))
    }, 1000)

    if (!productInCart) {
      dispatch(updateCart(product))
    }
  }

  const handleBuyNow = () => {
    setBuyLoad(true)

    if (!productInCart) {
      dispatch(updateCart(product))
    }
    setTimeout(() => {
      setBuyLoad(false)
      navigate('/cart')
    }, 1000)
  }

  return (
    <div className={Styles.product_details}>
      <header>
        <div className={Styles.go_back}>
          <NavLink to="/">
            <i className="fa-sharp fa-solid fa-arrow-left"></i> <p>Home</p>
          </NavLink>
        </div>
      </header>
      <section>
        <div className={Styles.product_img}>
          <img src={product.img} />
        </div>
        <div className={Styles.product_info}>
          <div className={Styles.name_category}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
          </div>
          <div className={Styles.company}>
            <p>Company: {product.company}</p>
          </div>
          <div className={Styles.price}>
            <del>{product.prevPrice}</del> <h1> ${product.newPrice}</h1>
          </div>
          <div className={Styles.rating_review}>
            <span>
              <i className="fa-regular fa-star"></i> {product.star}
            </span>{' '}
            <p>{product.reviews}</p>
          </div>
          <div className={Styles.btn_box}>
            {!cartLoad && productInCart ? (
              <button className={Styles.added_to_cart}>
                <i className="fa-solid fa-check-double"></i> Added To Cart
              </button>
            ) : (
              <button onClick={handleAddToCart} className={Styles.add_to_cart}>
                {cartLoad ? (
                  <TailSpin
                    height="15"
                    visible={true}
                    width="100%"
                    color="#313131"
                    strokeWidth="4"
                  />
                ) : (
                  'Add To Cart'
                )}
              </button>
            )}
            <button onClick={handleBuyNow} className={Styles.buy_now}>
              {buyLoad ? (
                <TailSpin
                  height="15"
                  visible={true}
                  width="100%"
                  color="#fff"
                  strokeWidth="4"
                />
              ) : (
                'Buy Now'
              )}
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <h1>Explore Similar Products</h1>
          <p>Find the perfect match for your preferences and needs.</p>
        </div>
        <div className={Styles.similar_product}>
          {similarProduct.map((e) => (
            <Card
              id={e.id}
              img={e.img}
              title={e.title}
              prevPrice={e.prevPrice}
              newPrice={e.newPrice}
              star={e.star}
              key={e.id}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}

export default ProductDetails
