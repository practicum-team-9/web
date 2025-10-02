import React, { useState, useEffect } from "react";
import { FormsTable } from "@widgets";
import { Template } from "@widgets";

function Admin(props) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    props
      .getForms()
      .then((forms) => setForms(forms.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Template>
      <FormsTable
        forms={forms}
        setForms={setForms}
        addForm={props.addForm}
        updateForm={props.updateForm}
        deleteForm={props.deleteForm}
      />
    </Template>
  );
}

export default Admin;
