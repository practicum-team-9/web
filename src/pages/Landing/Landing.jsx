import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NotFoundWidget, Primary } from "@widgets";
import Loader from "@/shared/ui/Loader/Loader.jsx";

function Landing({ getFormById }) {
  const [form, setForm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    getFormById(id)
      .then((form) => setForm(form.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [getFormById, id]);

  if (isLoading) return <Loader />;
  if (!form) return <NotFoundWidget />;
  return <Primary form={form} />;
}

export default Landing;
