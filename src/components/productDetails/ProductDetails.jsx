import React from "react";
import Styles from "./ProductDetails.module.css";

function ProductDetails() {
  return (
    <div className={Styles.product_details}>
      <img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" />
      <div className={Styles.full_details}>
        <h2>Nike Air Vapormax Plus</h2>
        <div className={Styles.star}>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <h5 className={Styles.reviews}>(123 reviews)</h5>
        <h4>
          <del>$140,00 </del> $200
        </h4>
        <div className={Styles.product_quality}>
          <p>company: Nike </p>
          <p> color: red </p>
          <p>category: sneakers</p>
        </div>
        <button className={Styles.btn}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
