import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NotFoundWidget, Primary } from "@widgets";

function Landing({ getFormById }) {
  const location = useLocation();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getFormById(location.pathname.split("/")[2])
      .then((form) => setForm(form.data))
      .catch((err) => console.log(err));
  }, []);

  return !form ? <NotFoundWidget /> : <Primary form={form} />;
}

export default Landing;
