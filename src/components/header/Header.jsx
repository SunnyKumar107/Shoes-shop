import React from "react";
import Styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { searchByText } from "../../reducers/productReducer";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ user, onHandleLogout }) {
  const username = user.name.split(" ")[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    onHandleLogout();
  };

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
      <div className={Styles.right_side}>
        <NavLink>
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
        <NavLink>
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={handleLogout}
          ></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
