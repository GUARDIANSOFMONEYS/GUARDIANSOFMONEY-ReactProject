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

const categories = [
  { name: "Main expenses", color: "#ff6384" },
  { name: "Products", color: "#36a2eb" },
  { name: "Car", color: "#cc65fe" },
  { name: "Self care", color: "#ffce56" },
  { name: "Child care", color: "#8BC34A" },
  { name: "Household products", color: "#FF9800" },
  { name: "Education", color: "#00BCD4" },
  { name: "Leisure", color: "#E91E63" },
  { name: "Other expenses", color: "#9C27B0" },
];

const StatisticsDashboard = () => {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const summary = useSelector((state) => state.statistics.summary);
  const loading = useSelector((state) => state.statistics.loading);
  const error = useSelector((state) => state.statistics.error);

  const expenses = useSelector((state) => state.statistics.expenses);
  const income = useSelector((state) => state.statistics.income);

  useEffect(() => {
    dispatch(fetchTransactionsSummary({ month, year }));
  }, [dispatch, month, year]);

  const chartData =
    summary && summary.categories
      ? (() => {
          const allZero = summary.categories.every((c) => c.sum === 0);
          return {
            labels: summary.categories.map((c) => c.name),
            datasets: [
              {
                data: allZero
                  ? summary.categories.map(() => 1)
                  : summary.categories.map((c) => c.sum),
                backgroundColor: allZero
                  ? summary.categories.map(() => "#cccccc")
                  : summary.categories.map((c) => c.color),
                hoverBackgroundColor: allZero
                  ? summary.categories.map(() => "#bbbbbbcc")
                  : summary.categories.map((c) => c.color + "cc"),
              },
            ],
          };
        })()
      : null;

  // console.log("chartData:", chartData);
  // console.log("summary detayları:", summary);

  return (
    <div className={styles.statisticsPage}>
      <div className={styles.statisticsPageLeft}>
        <button>deneme</button>
      </div>
      <div className={styles.statisticPageRight}>
        <h2 className={styles.Statistics}>Statistics</h2>
        <div className={styles.selectContainer}>
          <CustomSelect value={month} onChange={setMonth} options={months} />
          <CustomSelect value={year} onChange={setYear} options={years} />
        </div>

        <div className={styles.categorySum}>
          <h4 className={`${styles.categorySumh4} ${styles.Category}`}>
            Category
          </h4>
          <h4 className={`${styles.categorySumh4} ${styles.Sum}`}>Sum</h4>
        </div>

        <div className={styles.categoryList}>
          {categories.map(({ name, color }) => (
            <div key={name} className={styles.categoryItem}>
              <span
                className={styles.colorBox}
                style={{ backgroundColor: color }}
              ></span>
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className={styles.accountContainer}>
          <div className={styles.totalsContainer}>
            <span className={styles.label}>Expenses:</span>
            <span className={styles.valueExpenses}>{expenses || 0}</span>
          </div>

          <div className={styles.totalsContainer}>
            <span className={styles.label}>Income:</span>
            <span className={styles.valueIncome}>{income || 0}</span>
          </div>
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
            <div className={styles.chartAndCategories}>
              {chartData && <DoughnutChart data={chartData} />}

              <div className={styles.categoryList}>
                {summary.categories.map(({ name, sum, color }) => (
                  <div key={name} className={styles.categoryItem}>
                    <span
                      className={styles.colorBox}
                      style={{ backgroundColor: color }}
                    />
                    <span>
                      {name}: {sum}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <StatisticsTable data={summary} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsDashboard;
