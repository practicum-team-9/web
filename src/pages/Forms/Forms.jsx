import { useState, useEffect } from "react";
import { FormsList } from "@widgets";

function Forms({ getForms }) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms()
      .then((forms) => setForms(forms.data))
      .catch((err) => console.log(err));
  }, []);

  return <FormsList forms={forms} />;
}

export default Forms;
