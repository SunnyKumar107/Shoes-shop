import React from "react";
import "./CardContainer.css";
import Card from "../card/Card";
import data from "../../db/data";
import { NavLink } from "react-router-dom";

function CardContainer() {
  return (
    <div className="card_container">
      {data.map((e) => (
        <NavLink to="/productDetails">
          <Card
            img={e.img}
            title={e.title}
            prevPrice={e.prevPrice}
            newPrice={e.newPrice}
            key={e.title}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default CardContainer;
