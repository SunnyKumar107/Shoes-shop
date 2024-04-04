import Card from "../card/Card";
import CardContainer from "../cardContainer/CardContainer";
import Styles from "./ProductDetails.module.css";
import { NavLink, useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const id = useParams().id;
  const product = products.find((p) => p.id == id);
  const similarProduct = products.filter(
    (p) => p.category === product.category
  );

  if (!product) {
    return null;
  }

  return (
    <div className={Styles.product_details}>
      <header>
        <div className={Styles.go_back}>
          <NavLink to="/">
            <i className="fa-sharp fa-solid fa-arrow-left"></i> <p>Home</p>
          </NavLink>
        </div>
      </header>
      <section>
        <div className={Styles.product_img}>
          <img src={product.img} />
        </div>
        <div className={Styles.product_info}>
          <div className={Styles.name_category}>
            <h2>{product.title}</h2>
            <p>{product.category}</p>
          </div>
          <div className={Styles.company}>
            <p>Company: {product.company}</p>
          </div>
          <div className={Styles.price}>
            <del>{product.prevPrice}</del> <h1> ${product.newPrice}</h1>
          </div>
          <div className={Styles.rating_review}>
            <span>
              <i className="fa-regular fa-star"></i> 4.3 rating
            </span>{" "}
            <p>{product.reviews}</p>
          </div>
          <div className={Styles.btn_box}>
            <button className={Styles.add_to_cart}>Add To Cart</button>
            <button className={Styles.buy_now}>Buy Now</button>
          </div>
        </div>
      </section>
      <footer>
        <div>
          <h1>Explore Similar Products</h1>
          <p>Find the perfect match for your preferences and needs.</p>
        </div>
        <div className={Styles.similar_product}>
          {similarProduct.map((e) => (
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
      </footer>
    </div>
  );
}

export default ProductDetails;
