import React, { useEffect, useState } from "react";
import Styles from "./ProductDetails.module.css";
import { useLocation } from "react-router-dom";
import Product from "../../db/Product";

function ProductDetails() {
  const location = useLocation();

  const [item, stetItem] = useState({
    img: "",
    title: "",
    reviews: "",
    prevPrice: "",
    newPrice: "",
    company: "",
    category: "",
    colors: "",
  });

  const shoes = Product[location.state.ID - 1];

  useEffect(() => {
    stetItem({
      img: shoes.img,
      title: shoes.title,
      reviews: shoes.reviews,
      prevPrice: shoes.prevPrice,
      newPrice: shoes.newPrice,
      company: shoes.company,
      category: shoes.category,
      colors: shoes.color,
    });
  }, []);

  return (
    <div className={Styles.product_details}>
      <img src={item.img} />
      <div className={Styles.full_details}>
        <h2>{item.title}</h2>
        <div className={Styles.star}>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h5 className={Styles.reviews}>({item.reviews})</h5>
        <h4>
          <del>{item.prevPrice} </del> ${item.newPrice}
        </h4>
        <div className={Styles.product_quality}>
          <p>company: {item.company} </p>
          <p> color: {item.colors} </p>
          <p>category: {item.category}</p>
        </div>
        <button className={Styles.btn}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
