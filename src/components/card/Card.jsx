import Styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

function Card({ product }) {
  if (!product || !product.img) {
    return (
      <div className={Styles.loader_card}>
        <div className={Styles.loader_card_img}></div>
        <div className={Styles.loader_cart_info}>
          <div className={Styles.loader_cart_title}></div>
          <div className={Styles.loader_cart_star}></div>
          <div className={Styles.loader_cart_price}></div>
        </div>
      </div>
    )
  }

  return (
    <div className={Styles.card}>
      <NavLink to={`/productDetails/${product.id}`}>
        <div className={Styles.card_img_container}>
          <img src={product.img} alt="shoe" className={Styles.card_img} />
        </div>
      </NavLink>
      <div className={Styles.card_details}>
        <NavLink to={`/productDetails/${product.id}`}>
          <h3 className={Styles.card_title}>{product.title}</h3>
        </NavLink>
        <div className={Styles.card_reviews}>
          <span>
            <i className="fa-regular fa-star"></i> {product.star}
          </span>
        </div>
        <div className={Styles.card_price}>
          <div className={Styles.price}>
            <del>{product.prevPrice}</del> ${product.newPrice}
          </div>
          <div className={Styles.bag}>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  product: propTypes.object.isRequired
}

export default Card
