import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { getFormById } from "@/shared/api/index.js";

import { FormsTable } from "@widgets";

function Admin() {
  const location = useLocation();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getFormById(location.pathname.split("/")[2])
      .then((form) => setForm(form))
      .catch((err) => console.log(err));
  }, []);
  return (
    <FormsTable form={form} />
  );
}

export default Admin;
