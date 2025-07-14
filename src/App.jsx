import "./App.css";
// import ButtonAddTransactions from "./components/ButtonAddTransactions.jsx";
// import Balance from "./components/Balance.jsx";
// import Currency from "./components/Currency.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Header from "./components/Header/Header.jsx";
// import TransactionList from "./components/TransactionList.jsx";
import HomePage from "./pages/HomePage.jsx";
import StatisticsPage from "./pages/StatisticsPage.jsx";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <DashboardPage />

      <StatisticsPage />
    </>
  );
}

export default App;
