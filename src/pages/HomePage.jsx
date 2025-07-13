import React from "react";
import Home from "../components/Home/Home.jsx";
import Header from "../components/Header/Header.jsx";
import Currency from "../components/Currency/Currency.jsx";
// ÖZGEN GÜLER

const HomePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <Currency />
    </div>
  );
};

export default HomePage;
