import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
    return (
        <button disabled={props.disabled}
                className={`button ${props.className}`}
                type='button'
                aria-label={props.label}>
            {props.children}
        </button>
    );
}

export default CustomButton;