import { useNavigate } from "react-router-dom";

import CustomButton from "../../shared/ui/CustomButton/CustomButton.jsx";
import ImageBottom from "../../assets/images/img-bottom.svg";
import "./FormsList.css";

function FormsList({ forms }) {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="list">
      <img src={ImageBottom} className="img-bottom" alt=""/>
      <h1 className="title title_big">Заполните анкету</h1>
      <ul className="form-list">
        {forms.map((form, index) => (
          <li key={index}>
            <CustomButton
              className={`list-button ${
                index % 2 === 0 ? "button_light" : "button_dark"
              }`}
              onClick={() => handleButtonClick(form.id)}
            >
              {form.name}
            </CustomButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormsList;
