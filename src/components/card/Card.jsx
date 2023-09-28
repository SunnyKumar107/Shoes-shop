import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="shoe" className="card_img" />
      <div className="card_details">
        <h3 className="card_title">{props.title}</h3>
        <div className="card_reviews">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="card_price">
          <div className="price">
            <del>{props.prevPrice}</del> {props.newPrice}
          </div>
          <div className="bag">
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
