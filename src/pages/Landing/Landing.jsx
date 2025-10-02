import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Landing.css";
import { FormNotFound, Primary, Template } from "@widgets";

function Landing({ getFormById }) {
  const location = useLocation();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getFormById(location.pathname.split("/")[2])
      .then((form) => setForm(form.data))
      .catch((err) => console.log(err));
  }, []);

  return !form ? (
    <FormNotFound />
  ) : (
    <Template>
      <Primary form={form} />
    </Template>
  );
}

export default Landing;
