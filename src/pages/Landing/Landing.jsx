import React from "react";
import CustomButton from "../../components/Custombutton/CustomButton.jsx";
import logo from '../../assets/images/logo-invatur.svg';
import ImageTop from '../../assets/images/img-top.svg';
import ImageBottom from '../../assets/images/img-bottom.svg';
import ImagEyeWhite from '../../assets/images/eye-white.svg';
import {yandexFormLink, telegramLink} from "../../assets/constants";
import ConfirmCheckbox from "../../components/ConfirmCheckbox/ConfirmCheckbox.jsx";
import "./Landing.css";

function Landing() {

    const [isChecked, setIsChecked] = React.useState(false);

    function handleClick(event) {
        if (!isChecked) {
            event.preventDefault(); // блокируем переход по ссылке
        }
    }

  return (
      <>
          <img src={logo}
               className="logo" alt="Логотип организации инватур"/>
          <main className="landing">
              <img src={ImageTop}
                   className="img-top" alt="Логотип сердце в руках"/>
              <img src={ImageBottom}
                   className="img-bottom" alt="Логотип коробка в руках"/>
              <h1 className="title title_big">Для прохождения анкетирования выберите «Я&nbsp;Форму»  или
                  <span className="no-wrap">&nbsp;</span>
                  <span className="wrap"> </span>«Телеграм&nbsp;бот»</h1>
              <div className="buttons">
                  <div className="button-area">
                  <a className="button-link"
                     href={yandexFormLink}
                     target='_blank'
                     onClick={handleClick}
                     title="Стандартная версия опроса">
                      <CustomButton
                          disabled={!isChecked}
                          className={'button_standard'}
                          label={'стандартная версия опроса'}
                      >Яндекс форма
                      </CustomButton>
                  </a>
                      <p className="button-label">Стандартная версия опроса</p>
                  </div>
                      <div className="button-area">
                  <a className="button-link"
                     href={telegramLink}
                     target='_blank'
                     onClick={handleClick}
                     title="Версия для незрячих">
                      <CustomButton
                          disabled={!isChecked}
                          className={'button_special'}
                          label={'Версия для незрячих'}
                      >Телеграм бот
                          <img src={ImagEyeWhite} className="button-image" alt="версия для незрячих"/>
                      </CustomButton>
                  </a>
                          <p className="button-label">Версия для незрячих</p>
                   </div>
              </div>
                  <ConfirmCheckbox
                      isChecked={isChecked}
                      setIsChecked={setIsChecked}
                   />
          </main>
      </>
  );
}

export default Landing;
