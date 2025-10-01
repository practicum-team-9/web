import React from "react";
import CustomButton from "../../shared/ui/CustomButton/CustomButton.jsx";
import ImageBottom from '../../assets/images/img-bottom.svg';
import {yandexFormLink, telegramLink} from "../../assets/constants";
import "./FormsList.css";

function FormsList() {

    return (
        <main className="list">
            <img src={ImageBottom}
                 className="img-bottom" alt="Логотип коробка в руках"/>
            <h1 className="title title_big">Заполните анкету</h1>
            <div className="form-list">
                    <a className="button-link"
                       href={yandexFormLink}
                       target='_blank'
                       title="Заявка на содействие в трудоустройстве">
                        <CustomButton
                            disabled={false}
                            className={'list-button button_light'}
                            label={'Заявка на содействие в трудоустройстве'}
                        >Заявка на содействие в&nbsp;трудоустройстве
                        </CustomButton>
                    </a>
                    <a className="button-link"
                       href={"http://localhost:5173/landing"}
                       target='_blank'
                       title="Консультация по трудоустройству">
                        <CustomButton
                            disabled={false}
                            className={'list-button button_dark'}
                            label={'Консультация по трудоустройству'}
                        >Консультация по&nbsp;трудоустройству
                        </CustomButton>
                    </a>
                </div>
        </main>
    );
}

export default FormsList;