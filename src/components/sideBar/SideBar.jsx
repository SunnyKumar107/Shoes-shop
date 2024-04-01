import React from "react";
import Styles from "./SideBar.module.css";
import Category from "./category/Category";
import Price from "./price/Price";
import ShoesColor from "./shoesColor/ShoesColor";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className={Styles.sideBar}>
      <NavLink to={"/"}>
        <div className={Styles.logo}>
          <h1>
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
      </NavLink>
      <Category />
      <Price />
      <ShoesColor />
    </div>
  );
}

export default SideBar;
