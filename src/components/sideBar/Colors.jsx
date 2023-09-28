import React from "react";

function Colors() {
  return (
    <div className="colors">
      <h3>Colors</h3>
      <div className="category_type">
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Black
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Blue
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Red
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>White
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Green
        </label>
      </div>
    </div>
  );
}

export default Colors;
