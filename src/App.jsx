import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import CardContainer from "./components/cardContainer/CardContainer";

function App() {
  return (
    <div className="app">
      <Router>
        <SideBar />
        <Header />
        <Routes>
          <Route path="/" element={<CardContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
