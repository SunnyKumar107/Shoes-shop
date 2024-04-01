import React from "react";
import Styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { searchByText } from "../../reducers/productReducer";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className={Styles.header}>
      <div className={Styles.header_search}>
        <input
          type="text"
          className={Styles.search_input}
          placeholder="Enter your search shoes"
          onChange={(e) => dispatch(searchByText(e.target.value))}
        />
      </div>
      <div className={Styles.nav_icons}>
        <a href="">
          <i className="fa-regular fa-heart"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-user-plus"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
