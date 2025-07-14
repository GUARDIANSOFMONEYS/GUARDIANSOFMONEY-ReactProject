import React from "react";
import Home from "../components/Home/Home.jsx";
import Currency from "../components/Currency/Currency.jsx";
import Balance from "../components/Balance/Balance.jsx";
// ÖZGEN GÜLER

const HomePage = () => {
  return (
    <div>
      <Home />
      <Balance />
      <Currency />
    </div>
  );
};

export default HomePage;
