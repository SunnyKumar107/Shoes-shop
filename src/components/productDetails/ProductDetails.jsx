import Styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const id = useParams().id;
  const product = products.find((product) => product.id == id);

  if (!product) {
    return null;
  }

  return (
    <div className={Styles.product_details}>
      <img src={product.img} />
      <div className={Styles.full_details}>
        <h2>{product.title}</h2>
        <div className={Styles.star}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h5 className={Styles.reviews}>({product.reviews})</h5>
        <h4>
          <del>{product.prevPrice} </del> ${product.newPrice}
        </h4>
        <div className={Styles.product_quality}>
          <p>company: {product.company} </p>
          <p> color: {product.colors} </p>
          <p>category: {product.category}</p>
        </div>
        <button className={Styles.btn}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
