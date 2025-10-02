import { useState, useEffect } from "react";
import "./Forms.css";
import FormsList from "@/widgets/FormsList/FormsList.jsx";
import Template from "@/widgets/Template/Template.jsx";

function Forms({ getForms }) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms()
      .then((forms) => setForms(forms))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Template>
      <FormsList forms={forms} />
    </Template>
  );
}

export default Forms;
