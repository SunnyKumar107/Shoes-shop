import React from "react";
import Styles from "./CardContainer.module.css";
import Card from "../card/Card";

function CardContainer({ products }) {
  return (
    <div className={Styles.card_container}>
      {products.map((e) => (
        <Card
          id={e.id}
          img={e.img}
          title={e.title}
          prevPrice={e.prevPrice}
          newPrice={e.newPrice}
          key={e.id}
        />
      ))}
    </div>
  );
}

export default CardContainer;
