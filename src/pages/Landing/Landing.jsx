import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Landing.css";

import Primary from "@/widgets/Primary/Primary.jsx";
import Template from "@/widgets/Template/Template.jsx";

function Landing({ getFormById }) {
  const location = useLocation();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getFormById(location.pathname.split("/")[2])
      .then((form) => setForm(form))
      .catch((err) => console.log(err));
  }, []);

  return form ? (
    <div className="form-not-found">
      <h1>Формы не существует</h1>
    </div>
  ) : (
    <Template>
      <Primary form={form} />
    </Template>
  );
}

export default Landing;
