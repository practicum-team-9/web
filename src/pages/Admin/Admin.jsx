import React, { useState, useEffect } from "react";
import { FormsTable } from "@widgets";

function Admin(props) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    props
      .getForms()
      .then((forms) => setForms(forms.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormsTable
      forms={forms}
      onLogout={props.onLogout}
      setForms={setForms}
      addForm={props.addForm}
      updateForm={props.updateForm}
      deleteForm={props.deleteForm}
    />
  );
}

export default Admin;
