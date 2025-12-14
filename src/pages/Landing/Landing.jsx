import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NotFoundWidget, Primary } from "@widgets";
import Loader from "@/shared/ui/Loader/Loader.jsx";

function Landing({ getFormById }) {
  const [form, setForm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    if (!id) return;
    
    setIsLoading(true)
    getFormById(id)
      .then((response) => {
        if (response && response.data) {
          setForm(response.data)
        } else {
          setForm(null);
        }
      })
      .catch((err) => {
        console.error(err)
        setForm(null)
      })
      .finally(() => setIsLoading(false));
  }, [getFormById, id]);

  if (isLoading) return <Loader />;
  if (!form) {
    return <NotFoundWidget /> 
  } else {
    return <Primary form={form} />;
  }
}

export default Landing;
