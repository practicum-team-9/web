import React from "react";
import CustomButton from "../../shared/ui/CustomButton/CustomButton.jsx";
import ImageTop from "../../assets/images/img-top.svg";
import ImageBottom from "../../assets/images/img-bottom.svg";
import extensionsLogo from "../../assets/images/logo.svg";
import tgBotLogo from "../../assets/images/eye-white.svg";
import ConfirmCheckbox from "../../shared/ui/ConfirmCheckbox/ConfirmCheckbox.jsx";
import "./Primary.css";

import { useNavigate } from "react-router-dom";

function Primary({ form }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className="primary">
      <img src={ImageTop} className="img-top" alt="" />
      <img src={ImageBottom} className="img-bottom" alt="" />
      <h1 className="title title_big">
        Выберите формат прохождения анкеты
      </h1>
      <div className="buttons">
        <div className="button-area">
          <CustomButton
            disabled={!isChecked}
            className={"button_light"}
            label="Стандартная версия опроса"
            onClick={() => navigate(form.url)}
          >
            Яндекс форма
          </CustomButton>

          <p className="button-label">Стандартная версия опроса</p>
        </div>
        <div className="button-area">
          <CustomButton
            disabled={!isChecked}
            className="button_dark"
            label="Версия для незрячих"
            onClick={() => navigate(form.tg_bot_url)}
          >
            Телеграм бот
            <img
              src={tgBotLogo}
              className="button-image"
              alt="Расширение"
            />
          </CustomButton>
          <p className="button-label">Версия для незрячих</p>
        </div>
        <div className="button-area">
          <CustomButton
            className={"button_light"}
            label="Расширение"
            onClick={() => {
              navigate("/extensions/");
            }}
          >
            Расширение
            <img
              src={extensionsLogo}
              className="button-image"
              alt="Расширение"
            />
          </CustomButton>
          <p className="button-label">Установить расширение браузера для слабовидящих</p>
        </div>
      </div>
      <ConfirmCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
}

export default Primary;
