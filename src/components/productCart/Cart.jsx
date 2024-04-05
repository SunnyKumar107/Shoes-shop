import React from "react";
import Styles from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import Card from "../card/Card";

const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return (
      <div className={Styles.empty_cart}>
        <h1>No items found!</h1>
        <p>
          Explore our amazing products and start filling it with items you love!
        </p>
        <NavLink to="/">
          <i className="fa-sharp fa-solid fa-arrow-left"></i> <p>Home</p>
        </NavLink>
      </div>
    );
  }

  return (
    <div className={Styles.cart}>
      <header>
        <div className={Styles.go_back}>
          <NavLink to="/">
            <i className="fa-sharp fa-solid fa-arrow-left"></i> <p>Home</p>
          </NavLink>
        </div>
      </header>
      <section>
        <div>
          <h1>Review Items in Your Cart</h1>
          <p>
            Take a moment to review the items in your cart before placing order.
          </p>
        </div>
        <div className={Styles.cart_container}>
          <div className={Styles.cart_items}>
            {cartItems.map((e) => (
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
          <div className={Styles.price_detail}>
            <h2>Price Details</h2>
            <div className={Styles.detail_container}>
              <div className={Styles.list_type}>
                Cart Total <span>$400</span>
              </div>
              <div className={Styles.list_type}>
                Cart Discount <span>25</span>
              </div>
              <div className={Styles.list_type}>
                Delivery <span>0</span>
              </div>
              <div className={Styles.list_type}>
                Tax <span>40</span>
              </div>
              <div className={Styles.order_total}>
                Order Total <span>$420</span>
              </div>
            </div>
            <button className={Styles.place_order}>Place Order</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
