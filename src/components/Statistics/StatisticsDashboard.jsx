// Meryem Aslan

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactionsSummary } from "../../redux/statistics/statisticsOperations";
import StatisticsTable from "../StatisticsTable/StatisticsTable";
import CustomSelect from "./CustomSelect";
import DoughnutChart from "../StatisticsTable/DoughnutChart";
import styles from "./StatisticsDashboard.module.css";

const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

const years = [
  { value: 2025, label: "2025" },
  { value: 2024, label: "2024" },
  { value: 2023, label: "2023" },
  { value: 2022, label: "2022" },
  { value: 2021, label: "2021" },
];

const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const summary = useSelector((state) => state.statistics.summary);
  const loading = useSelector((state) => state.statistics.loading);
  const error = useSelector((state) => state.statistics.error);

  useEffect(() => {
    dispatch(fetchTransactionsSummary({ month, year }));
  }, [dispatch, month, year]);

  // Örnek chart data (sonradan API verisiyle değiştireceğiz)
  const chartData = {
    labels: ["Eğitim", "Araba", "Yiyecek", "Diğer"],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        hoverBackgroundColor: [
          "#ff6384cc",
          "#36a2ebcc",
          "#cc65fecc",
          "#ffce56cc",
        ],
      },
    ],
  };

  return (
    <div>
      <div className={styles.selectContainer}>
        <CustomSelect value={month} onChange={setMonth} options={months} />
        <CustomSelect value={year} onChange={setYear} options={years} />
      </div>

      {loading && <p>Yükleniyor...</p>}

      {error && (
        <p style={{ color: "red" }}>
          Hata: {typeof error === "string" ? error : JSON.stringify(error)}
        </p>
      )}

      {summary && (
        <div>
          <h3>Toplam İşlem Tutarı: {summary.totalAmount}</h3>
          <DoughnutChart data={chartData} />
          <StatisticsTable data={summary} />
        </div>
      )}
    </div>
  );
};

export default StatisticsDashboard;
