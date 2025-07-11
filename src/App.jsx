import "./App.css";
import StatisticsTable from "./components/StatisticsTable/StatisticsTable";
import StatisticsDashboard from "./components/Statistics/StatisticsDashboard";
import { useSelector } from "react-redux";

function App() {
  const statisticsData = useSelector((state) => state.statistics.data);

  return (
    <>
      <StatisticsDashboard />
      <StatisticsTable data={statisticsData} />
    </>
  );
}

export default App;
