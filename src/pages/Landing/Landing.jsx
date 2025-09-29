import React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import logoInvatur from '../../assets/images/logo-invatur.svg';
import ImageTop from '../../assets/images/img-top.svg';
import ImageBottom from '../../assets/images/img-bottom.svg';

import "./Landing.css";

function Landing() {
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked(!checked);
  }
  return (
      <>
          <img src={logoInvatur}
               className="logo-invatur" alt="Логотип организации инватур"/>
          <main className="landing">
              <img src={ImageTop}
                   className="img-top" alt="Логотип сердце в руках"/>
              <img src={ImageBottom}
                   className="img-bottom" alt="Логотип сердце в руках"/>
              <h1 className="title">Для прохождения анкетирования выберите «Я Форму»  или&nbsp;«Телеграм бот»</h1>
              <div className="buttons">
                  <Button
                      variant="contained"
                      component="a"
                      disabled={!checked}
                      href="https://forms.yandex.ru/u/68d5476350569036b2c6eab1/"
                  >
                      Яндекс форма
                  </Button>
                  <Button
                      variant="contained"
                      disabled={!checked}
                      onClick={() => {
                        alert("clicked2");
                      }}
                  >стандартная версия опроса
                  </Button>
                    <div className="confirmation">
                      <Checkbox checked={checked} onChange={handleChange} defaultChecked />
                      <p>подтверждения согласия с политикой обработки персональных данных</p>
                    </div>
              </div>
          </main>
      </>
  );
}

export default Landing;
