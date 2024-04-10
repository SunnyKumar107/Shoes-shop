import React, { useState } from 'react'
import Styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

function Card({ id, img, title, newPrice, prevPrice, star }) {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 1000)

  if (loader) {
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
      <NavLink to={`/productDetails/${id}`}>
        <img src={img} alt="shoe" className={Styles.card_img} />
      </NavLink>
      <div className={Styles.card_details}>
        <NavLink to={`/productDetails/${id}`}>
          <h3 className={Styles.card_title}>{title}</h3>
        </NavLink>
        <div className={Styles.card_reviews}>
          <span>
            <i className="fa-regular fa-star"></i> {star}
          </span>
        </div>
        <div className={Styles.card_price}>
          <div className={Styles.price}>
            <del>{prevPrice}</del> ${newPrice}
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
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  prevPrice: propTypes.string.isRequired,
  newPrice: propTypes.string.isRequired,
  star: propTypes.string.isRequired
}

export default Card
