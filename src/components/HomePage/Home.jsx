import { NavLink } from "react-router-dom";
import Styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={Styles.home_page}>
      <header>
        <h1>Welcome to my Shoe Shop</h1>
      </header>
      <section>
        <div className={Styles.img_container}>
          <img
            src="../../../public/pngwing.com.png"
            alt="shoes-img-for-homepage"
          />
        </div>
        <div className={Styles.homepage_info}>
          <h1>Find your perfect shoe pair.</h1>
          <div className={Styles.description}>
            <p>
              Discover a curated collection of footwear ranging from trendy
              sneakers to elegant heels, designed to elevate your look for any
              occasion. Explore a wide range of brands, styles, and sizes,
              ensuring you find the perfect fit every time. Whether you're
              searching for everyday essentials or statement pieces, our app has
              something for every taste and budget.{" "}
            </p>
            <NavLink to="/login">
              {/* <span> */}
              Log in <i className="fa-sharp fa-solid fa-arrow-right"></i>
              {/* </span> */}
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
