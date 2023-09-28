import React from "react";

function Category() {
  return (
    <div className="category">
      <h3>Category</h3>
      <div className="category_type">
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sideBar_label_container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
}

export default Category;
