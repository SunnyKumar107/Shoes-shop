import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="logo">
        <h1>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </h1>
      </div>
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
    </div>
  );
}

export default SideBar;
