import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import Styles from "./ProductDetails.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { initializeProducts } from "../../reducers/productReducer";
import { updateCart } from "../../reducers/cartsReducer";

function ProductDetails({ onHandleAddToCart }) {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts);
  }, [dispatch]);

  const id = useParams().id;
  const product = products.find((p) => p.id == id);

  const similarProduct = products.filter(
    (p) => p.category === product.category
  );

  const navigate = useNavigate();

  if (!product) {
    return null;
  }

  const productInCart = cart.find((p) => p.id === product.id);

  const handleAddToCart = () => {
    dispatch(updateCart(product));
  };

  const handleBuyNow = () => {
    if (!productInCart) {
      handleAddToCart();
    }

    navigate("/cart");
  };

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
              <i className="fa-regular fa-star"></i> {product.star}
            </span>{" "}
            <p>{product.reviews}</p>
          </div>
          <div className={Styles.btn_box}>
            {productInCart ? (
              <button className={Styles.added_to_cart}>
                <i className="fa-solid fa-check-double"></i> Added To Cart
              </button>
            ) : (
              <button onClick={handleAddToCart} className={Styles.add_to_cart}>
                Add To Cart
              </button>
            )}
            <button onClick={handleBuyNow} className={Styles.buy_now}>
              Buy Now
            </button>
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
