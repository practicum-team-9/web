import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NotFoundWidget, Primary } from "@widgets";
import Loader from "@/shared/ui/Loader/Loader.jsx";

function Landing({ getFormById }) {
  const location = useLocation();
  const [form, setForm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFormById(location.pathname.split("/")[2])
      .then((form) => setForm(form.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [location.pathname]);

  if (isLoading) return <Loader />;
  if (!form) return <NotFoundWidget />;
  return <Primary form={form} />;
}

export default Landing;
