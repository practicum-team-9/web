import React from "react";
import { FormsTable } from "@widgets";
import { Template } from "@widgets";
import image404 from "../../assets/images/404.png";
import ImageBottom from "../../assets/images/img-bottom.svg";
import "./NotFound.css";

function NotFound() {

  return (
    <>
        <Template>
            <div className="not-found">
                <div className="image-container">
                    <img src={image404} alt="Страница с ошибкой 404" />
                </div>
                <div className="text-container"> 
                    <h2 className="not-found-h">Ой, а такой страницы нет!</h2>
                    <p className="not-found-p">К сожалению такой страницы не существует. <br/>Вы можете вернуться на <a className="not-found-a" href='/choose-form'>страницу выбора форм</a></p>
                </div>
            </div>
            <img
            src={ImageBottom}
            className="img-bottom"
            alt="Логотип коробка в руках"
            />
        </Template>
    </>
  );
}

export default NotFound;
