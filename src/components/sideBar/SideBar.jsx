import React from "react";
import "./SideBar.css";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="logo">
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
