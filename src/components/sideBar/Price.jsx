import React from "react";

function Price() {
  return (
    <div className="price">
      <h3>Price</h3>
      <div className="category_type">
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$0 - $50
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$50 - $100
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>$100 - $150
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Over $150
        </label>
      </div>
    </div>
  );
}

export default Price;
