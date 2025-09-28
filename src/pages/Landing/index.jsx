import React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

import "./index.css";

function Landing() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked(!checked);
  }
  return (
    <main className="landing">
      <button
        variant="contained"
        disabled={!checked}
        onClick={() => {
          alert("clicked1");
        }}
      >
        версия для незрячих
      </button>
      <button
        variant="contained"
        disabled={!checked}
        onClick={() => {
          alert("clicked2");
        }}
      >
        стандартная версия опроса
      </button>
      <div className="confirmation">
        <Checkbox checked={checked} onChange={handleChange} defaultChecked />
        <p>подтверждения согласия с политикой обработки персональных данных</p>
      </div>
    </main>
  );
}

export default Landing;
