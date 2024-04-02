import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import CardContainer from "./components/cardContainer/CardContainer";
import ProductDetails from "./components/productDetails/ProductDetails";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "./reducers/productReducer";
import LoginPage from "./components/loginPage/LoginPage";
import { initializeUser, loginUser, logoutUser } from "./reducers/loginReducer";

function App() {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
    dispatch(initializeUser());
  }, [dispatch]);

  const handleLogin = async ({ email, password }) => {
    dispatch(loginUser({ email: email, password: password }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage onHandleLogin={handleLogin} />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <SideBar />
      <Header user={user} onHandleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<CardContainer products={products} />} />
        <Route
          path="/productDetails/:id"
          element={<ProductDetails products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
