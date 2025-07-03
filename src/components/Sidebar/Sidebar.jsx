import React from "react";
import css from "./Sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <div className={css.menu}>
        <ul>
          <li className={css.menuItem + css.active}>
            <FaHome className={css.icon} />
            <span className={css.home}>Home</span>
          </li>
          <li className={css.menuItem}>
            <MdShowChart className={css.icon} />
            <span className={css.stats}>Statistics</span>
          </li>
        </ul>
      </div>
      <div className={css.balancedCard}>
        <p className={css.balancedText}>YOUR BALANCE</p>
        <h2 className={css.balancedAmount}>₴ 0.00</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
