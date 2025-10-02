import React from "react";
import CustomButton from "../../shared/ui/CustomButton/CustomButton.jsx";
import ImageBottom from "../../assets/images/img-bottom.svg";
import "./FormsList.css";

import { useNavigate } from "react-router-dom";

function FormsList({ forms }) {
  const temp = [
    { name: "Заявка на содействие в трудоустройстве", id: "1" },
    { name: "Консультация по трудоустройству", id: "2" },
  ];

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <main className="list">
      <img
        src={ImageBottom}
        className="img-bottom"
        alt="Логотип коробка в руках"
      />
      <h1 className="title title_big">Заполните анкету</h1>
      <div className="form-list">
        {temp.map((form, index) => (
          <CustomButton
            className={`list-button ${
              index % 2 === 0 ? "button_dark" : "button_light"
            }`}
            onClick={() => handleButtonClick(form.id)}
          >
            {form.name}
          </CustomButton>
        ))}
      </div>
    </main>
  );
}

export default FormsList;
