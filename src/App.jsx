import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import CardContainer from "./components/cardContainer/CardContainer";
import ProductDetails from "./components/productDetails/ProductDetails";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "./reducers/productReducer";
import LoginPage from "./components/loginPage/LoginPage";
import { initializeUser, loginUser, logoutUser } from "./reducers/loginReducer";
import { initializeCarts, removeItem } from "./reducers/cartsReducer";
import Register from "./components/Register/Register";
import usersService from "./services/users";
import Cart from "./components/productCart/Cart";

function App() {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
    dispatch(initializeUser());
    dispatch(initializeCarts());
  }, [dispatch]);

  const handleLogin = async ({ email, password }) => {
    dispatch(loginUser({ email: email, password: password }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleRegister = async ({ email, name, password }) => {
    const newUser = await usersService.create({
      email: email,
      name: name,
      password: password,
    });
    console.log("newUser", newUser);
  };

  const handleRemoveToCart = (id) => {
    dispatch(removeItem(id));
  };

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onHandleLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<Register onHandleRegister={handleRegister} />}
          />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Header onHandleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<CardContainer products={products} />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onHandleRemoveToCart={handleRemoveToCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
