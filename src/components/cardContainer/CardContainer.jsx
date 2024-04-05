import React from "react";
import Styles from "./CardContainer.module.css";
import Card from "../card/Card";
import SideBar from "../sideBar/SideBar";

function CardContainer({ products }) {
  console.log("products", products);
  return (
    <div>
      <SideBar />
      <div className={Styles.card_container}>
        {products.map((e) => (
          <Card
            id={e.id}
            img={e.img}
            title={e.title}
            prevPrice={e.prevPrice}
            newPrice={e.newPrice}
            star={e.star}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
