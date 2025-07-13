import React from "react";
import css from "./Balance.module.css";

// ÖZGEN GÜLER

const Balance = () => {
  return (
    <div className={css.balancedCard}>
      <p className={css.balancedText}>YOUR BALANCE</p>
      <h2 className={css.balancedAmount}>₴ 0.00</h2>
    </div>
  );
};

export default Balance;
