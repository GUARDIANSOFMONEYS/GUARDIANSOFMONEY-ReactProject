// src/components/ProgressBar/ProgressBar.jsx
import React from "react";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ percent }) {
    return (
        <div className={styles.barContainer}>
            <div
                className={styles.progress}
                style={{
                    width: `${percent}%`,
                    backgroundColor: percent === 100 ? "#00ff99" : "#ff0055",
                }}
            ></div>
        </div>
    );
}
