import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
  return (
    <button
      disabled={props.disabled}
      className={`button ${props.className}`}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default CustomButton;
