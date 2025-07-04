import Sidebar from "../components/Sidebar/Sidebar";

const StatisticsDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main>{/* Grafikli istatistik içerikleri burada olacak */}</main>
    </div>
  );
};

export default StatisticsDashboard;
