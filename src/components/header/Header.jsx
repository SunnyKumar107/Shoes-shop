import React from "react";
import Styles from "./Header.module.css";

function Header() {
  return (
    <div className={Styles.header}>
      <div className={Styles.header_search}>
        <input
          type="text"
          className={Styles.search_input}
          placeholder="Enter your search shoes"
        />
      </div>
      <div className={Styles.nav_icons}>
        <a href="">
          <i class="fa-regular fa-heart"></i>
        </a>
        <a href="">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="">
          <i class="fa-solid fa-user-plus"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
