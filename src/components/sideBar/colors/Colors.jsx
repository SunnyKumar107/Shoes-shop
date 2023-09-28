import React from "react";
import Styles from "./Colors.module.css";

function Colors() {
  return (
    <div className={Styles.colors}>
      <h3>Colors</h3>
      <div className={Styles.category_type}>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>All
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Black
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Blue
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Red
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>White
        </label>
        <label>
          <input type="radio" name="test" />
          <span className={Styles.checkmark}></span>Green
        </label>
      </div>
    </div>
  );
}

export default Colors;
