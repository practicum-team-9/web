import React from "react";
import CustomButton from "../../shared/ui/CustomButton/CustomButton.jsx";
import ImageTop from '../../assets/images/img-top.svg';
import ImageBottom from '../../assets/images/img-bottom.svg';
import ImagEyeWhite from '../../assets/images/eye-white.svg';
import {yandexFormLink, telegramLink} from "../../assets/constants";
import ConfirmCheckbox from "../../shared/ui/ConfirmCheckbox/ConfirmCheckbox.jsx";
import "./Primary.css";

function Primary() {

    const [isChecked, setIsChecked] = React.useState(false);

    function handleClick(event) {
        if (!isChecked) {
            event.preventDefault();
        }
    }

    return (
        <main className="primary">
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
                                className={'button_light'}
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
                                className={'button_dark'}
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
    );
}

export default Primary;
