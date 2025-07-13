// Meryem Aslan
import React, { useState, useRef, useEffect } from "react";
import styles from "./CustomSelect.module.css";

const CustomSelect = ({ value, onChange, options = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div
      ref={ref}
      className={styles.selectBox}
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      {selectedOption ? selectedOption.label : "Select..."}
      {open && (
        <ul className={styles.optionsList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${
                opt.value === value ? styles.optionSelected : ""
              }`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
