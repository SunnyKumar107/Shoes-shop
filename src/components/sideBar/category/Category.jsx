import React from "react";
import Styles from "./Category.module.css";

function Category() {
  return (
    <div className={Styles.category}>
      <h3>Category</h3>
      <div className={Styles.category_type}>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>All
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Sneakers
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Flats
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Sandals
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Heels
        </label>
      </div>
    </div>
  );
}

export default Category;
