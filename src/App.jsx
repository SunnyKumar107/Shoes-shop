import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
