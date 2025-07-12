import React from "react";
<<<<<<< HEAD
import css from "./Home.module.css";
import { FaDollarSign, FaHome } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <div className={css.menu}>
        <ul className={css.menuList}>
          <li className={css.menuHome}>
            <NavLink to="/home" className={css.active}>
              <div className={css.icon}>
                <FaHome />
              </div>
              <span className={css.home}>Home</span>
            </NavLink>
          </li>
          <li className={css.menuStatistics}>
            <NavLink to="/statistics" className={css.active}>
              <div className={css.icon}>
                <MdShowChart />
              </div>
              <span className={css.statistics}>Statistics</span>
            </NavLink>
          </li>
          <li className={css.menuDolar}>
            <NavLink
              to="/currency"
              className={({ isActive }) => (isActive ? css.active : "")}
            >
              <div className={css.icon}>
                <FaDollarSign />
              </div>
              <span>Currency</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className={css.balancedCard}>
        <p className={css.balancedText}>YOUR BALANCE</p>
        <h2 className={css.balancedAmount}>₴ 0.00</h2>
      </div> */}
    </aside>
  );
};

export default Sidebar;
=======

// ÖZGEN GÜLER

const Home = () => {
  return <div></div>;
};

export default Home;
>>>>>>> 9c4ea624ab4bc05ae73d26749b36eb251986b511
