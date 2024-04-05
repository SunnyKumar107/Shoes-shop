import React, { useState } from "react";
import Styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Card(props) {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1500);

  if (loader) {
    return (
      <div className={Styles.loader_card}>
        <RotatingLines
          visible={true}
          width="50"
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

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
            <i className="fa-regular fa-star"></i> {props.star}
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
