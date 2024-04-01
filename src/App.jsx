import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import CardContainer from "./components/cardContainer/CardContainer";
import ProductDetails from "./components/productDetails/ProductDetails";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "./reducers/productReducer";

function App() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Router>
      <SideBar />
      <Header />
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
