import React from "react";
import Styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <NavLink to={`/productDetails/${props.title}`} state={{ ID: props.ID }}>
      <div className={Styles.card}>
        <img src={props.img} alt="shoe" className={Styles.card_img} />
        <div className={Styles.card_details}>
          <h3 className={Styles.card_title}>{props.title}</h3>
          <div className={Styles.card_reviews}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className={Styles.card_price}>
            <div className={Styles.price}>
              <del>{props.prevPrice}</del> {props.newPrice}
            </div>
            <div className={Styles.bag}>
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
