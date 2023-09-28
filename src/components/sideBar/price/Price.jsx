import React from "react";
import Styles from "./Price.module.css";

function Price() {
  return (
    <div className={Styles.price}>
      <h3>Price</h3>
      <div className={Styles.category_type}>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>All
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>$0 - $50
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>$50 - $100
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>$100 - $150
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Over $150
        </label>
      </div>
    </div>
  );
}

export default Price;
