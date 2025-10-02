import React from "react";
import CustomButton from "../../shared/ui/CustomButton/CustomButton.jsx";
import ImageTop from "../../assets/images/img-top.svg";
import ImageBottom from "../../assets/images/img-bottom.svg";
import ImagEyeWhite from "../../assets/images/eye-white.svg";
import ConfirmCheckbox from "../../shared/ui/ConfirmCheckbox/ConfirmCheckbox.jsx";
import "./Primary.css";

function Primary({ form }) {
  const [isChecked, setIsChecked] = React.useState(false);

  function handleButtonClick(link) {
    window.location.href = link;
  }

  return (
    <main className="primary">
      <img src={ImageTop} className="img-top" alt="Логотип сердце в руках" />
      <img
        src={ImageBottom}
        className="img-bottom"
        alt="Логотип коробка в руках"
      />
      <h1 className="title title_big">
        Для прохождения анкетирования выберите «Я&nbsp;Форму» или
        <span className="no-wrap">&nbsp;</span>
        <span className="wrap"> </span>«Телеграм&nbsp;бот»
      </h1>
      <div className="buttons">
        <div className="button-area">
          <CustomButton
            disabled={!isChecked}
            className={"button_light"}
            label="стандартная версия опроса"
            onClick={() => handleButtonClick(form.url)}
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
            onClick={() => handleButtonClick(form.tg_bot_url)}
          >
            Телеграм бот
            <img
              src={ImagEyeWhite}
              className="button-image"
              alt="версия для незрячих"
            />
          </CustomButton>
          <p className="button-label">Версия для незрячих</p>
        </div>
      </div>
      <ConfirmCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
    </main>
  );
}

export default Primary;
