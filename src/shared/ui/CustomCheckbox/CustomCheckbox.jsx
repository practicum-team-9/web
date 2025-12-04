import React from "react";
import "./CustomCheckbox.css";

function CustomCheckbox({ isChecked, setIsChecked }) {
  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="hidden-checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <span
          tabIndex={0}
          role="checkbox"
          aria-checked={isChecked}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleCheckbox();
            }
          }}
          className={`custom-checkbox ${
            isChecked ? "custom-checkbox_checked" : ""
          }`}
        ></span>
      </label>
      <p className="checkbox-text">
        Запомнить меня
      </p>
    </div>
  );
}

export default CustomCheckbox;
