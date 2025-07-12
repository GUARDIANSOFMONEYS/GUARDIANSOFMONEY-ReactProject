// import React from "react";
// import css from "../components/Sidebar/Sidebar.module.css";
// import { FaHome } from "react-icons/fa";
// import { MdShowChart } from "react-icons/md";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <aside className={css.sidebar}>
//       <div className={css.menu}>
//         <ul>
//           <li className={css.menuItem}>
//             <NavLink
//               to="/home"
//               className={({ isActive }) => (isActive ? css.active : "")}
//             >
//               <FaHome /> <span>Home</span>
//             </NavLink>
//           </li>
//           <li className={css.menuItem}>
//             <NavLink
//               to="/statistics"
//               className={({ isActive }) => (isActive ? css.active : "")}
//             >
//               <MdShowChart /> <span>Statistics</span>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className={css.balancedCard}>
//         <p className={css.balancedText}>YOUR BALANCE</p>
//         <h2 className={css.balancedAmount}>₴ 0.00</h2>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import Sidebar from "../components/Sidebar/Sidebar";

const HomeDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main>{/* Balance, currency, table vs. burada olacak */}</main>
    </div>
  );
};

export default HomeDashboard;
