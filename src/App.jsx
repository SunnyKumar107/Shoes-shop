import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import CardContainer from "./components/cardContainer/CardContainer";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <SideBar />
        <Header />
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/productDetails/:title" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
