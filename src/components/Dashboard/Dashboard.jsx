import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import { FaTimes } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

const Dashboard = ({ newTransaction }) => {
  const [transactions, setTransactions] = useState([
    {
      id: uuidv4(),
      date: "2025-07-01",
      type: "income",
      category: "Income",
      comment: "Freelance payment",
      sum: "2500.00",
    },
    {
      id: uuidv4(),
      date: "2025-07-03",
      type: "expense",
      category: "Car",
      comment: "Fuel refill",
      sum: "350.00",
    },
    {
      id: uuidv4(),
      date: "2025-07-05",
      type: "expense",
      category: "Household",
      comment: "Groceries",
      sum: "800.00",
    },
    {
      id: uuidv4(),
      date: "2025-07-06",
      type: "income",
      category: "Income",
      comment: "Salary",
      sum: "5000.00",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [type, setType] = useState("income");

  // Dışarıdan gelen veriyi listeye eklenecek kısım :D
  useEffect(() => {
    if (newTransaction && newTransaction.id) {
      setTransactions((prev) => [...prev, newTransaction]);
    }
  }, [newTransaction]);

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";
    setSortConfig({ key, direction });

    const sorted = [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setTransactions(sorted);
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalData(item);
    setType(item.type);
    setEditMode(true);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...modalData,
      type,
      category: type === "income" ? "Income" : modalData.category,
      id: editMode ? modalData.id : uuidv4(),
    };
    setTransactions((prev) => {
      if (editMode)
        return prev.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      return [...prev, updatedItem];
    });
    setShowModal(false);
    setModalData({});
    setEditMode(false);
  };

  const handleCategoryChange = (e) => {
    setModalData({ ...modalData, category: e.target.value });
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        {["date", "type", "category", "comment", "sum"].map((col) => (
          <div
            key={col}
            className={styles.column}
            onClick={() => sortData(col)}
          >
            {col.toUpperCase()}
          </div>
        ))}
        <div className={styles.column}>ACTIONS</div>
      </div>

      {transactions.map((item) => (
        <div className={styles.row} key={item.id}>
          <div className={styles.cell} data-label="Date">
            {item.date}
          </div>
          <div
            className={styles.cell}
            data-label="Type"
            style={{ color: item.type === "income" ? "#FFB627" : "#FF6B6B" }}
          >
            {item.type === "income" ? "+" : "-"} {item.type}
          </div>
          <div className={styles.cell} data-label="Category">
            {item.category}
          </div>
          <div className={styles.cell} data-label="Comment">
            {item.comment}
          </div>
          <div
            className={styles.cell}
            data-label="Sum"
            style={{ color: item.type === "income" ? "#FFB627" : "#FF6B6B" }}
          >
            {item.sum}
          </div>
          <div className={styles.cell} data-label="Actions">
            <div className={styles.table_buttons}>
              <button
                onClick={() => handleEdit(item)}
                className={styles.iconBtn}
              >
                <HiOutlinePencil />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <h2 className={styles.modalTitle}>Edit transaction</h2>

            <div
              className={`${styles.typeText} ${
                type === "income" ? styles.income : styles.expense
              }`}
            >
              {type === "income" ? "Income" : "Expense"}
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              {type !== "income" && (
                <div className={styles.categoryField}>
                  <input
                    type="text"
                    placeholder="Category (e.g. Product, Car, etc.)"
                    className={styles.categoryInput}
                    value={modalData.category || ""}
                    onChange={handleCategoryChange}
                    required
                  />
                </div>
              )}

              <div className={styles.inlineFields}>
                <input
                  type="number"
                  placeholder="0.00"
                  className={styles.inputUnderline}
                  value={modalData.sum || ""}
                  onChange={(e) =>
                    setModalData({ ...modalData, sum: e.target.value })
                  }
                  required
                />
                <input
                  type="date"
                  className={styles.inputUnderline}
                  value={modalData.date || ""}
                  onChange={(e) =>
                    setModalData({ ...modalData, date: e.target.value })
                  }
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Comment"
                className={styles.commentInput}
                value={modalData.comment || ""}
                onChange={(e) =>
                  setModalData({ ...modalData, comment: e.target.value })
                }
              />
              <div className={styles.modal_butons}>
                <button type="submit" className={styles.saveBtn}>
                  SAVE
                </button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowModal(false)}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
