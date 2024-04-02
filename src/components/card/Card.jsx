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
        <h3 className={Styles.card_title}>{props.title}</h3>
        <div className={Styles.card_reviews}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={Styles.card_price}>
          <div className={Styles.price}>
            <del>{props.prevPrice}</del> {props.newPrice}
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
