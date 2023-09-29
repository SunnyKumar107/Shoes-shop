import React from "react";
import Styles from "./CardContainer.module.css";
import Card from "../card/Card";
import Product from "../../db/Product";

function CardContainer() {
  return (
    <div className={Styles.card_container}>
      {Product.map((e) => (
        <Card
          ID={e.ID}
          img={e.img}
          title={e.title}
          prevPrice={e.prevPrice}
          newPrice={e.newPrice}
          key={Math.random()}
        />
      ))}
    </div>
  );
}

export default CardContainer;
