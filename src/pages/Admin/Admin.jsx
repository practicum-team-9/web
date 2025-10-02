import React, { useState, useEffect } from "react";
import { FormsTable } from "@widgets";

function Admin(props) {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // props.getForms()
    //   .then((forms) => setForms(forms))
    //   .catch((err) => console.log(err));
    setForms([
      {
        name: "Заявка на содействие в трудоустройстве",
        url: "https://forms.yandex.ru/cloud/683ea0c790fa7b3a18f38e98/",
        id: 2,
        tg_bot_url:
          "https://t.me/YandexFormsHelperBot?start=683ea0c790fa7b3a18f38e98",
        self_page_path: "http://51.250.113.76:8001/v1/forms/get-form/2",
      },
    ]);
  }, []);

  return (
    <FormsTable
      forms={forms}
      setForms={setForms}
      addForm={props.addForm}
      updateForm={props.updateForm}
      deleteForm={props.deleteForm}
    />
  );
}

export default Admin;
