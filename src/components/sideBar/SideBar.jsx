import React from "react";
import Styles from "./SideBar.module.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

function SideBar() {
  return (
    <div className={Styles.sideBar}>
      <div className={Styles.logo}>
        <h1>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        </h1>
      </div>
      <Category />
      <Price />
      <Colors />
    </div>
  );
}

export default SideBar;
