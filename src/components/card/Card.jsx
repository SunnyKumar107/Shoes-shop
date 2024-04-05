import React from "react";
import Styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className={Styles.card}>
      <NavLink to={`/productDetails/${props.id}`}>
        <img src={props.img} alt="shoe" className={Styles.card_img} />
      </NavLink>
      <div className={Styles.card_details}>
        <NavLink to={`/productDetails/${props.id}`}>
          <h3 className={Styles.card_title}>{props.title}</h3>
        </NavLink>
        <div className={Styles.card_reviews}>
          <span>
            <i className="fa-regular fa-star"></i> 4.3
          </span>
        </div>
        <div className={Styles.card_price}>
          <div className={Styles.price}>
            <del>{props.prevPrice}</del> ${props.newPrice}
          </div>
          <div className={Styles.bag}>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
