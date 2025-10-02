import React from "react";
import { FormsTable } from "@widgets";
import { Template } from "@widgets";
import image404 from "../../assets/images/404.png";

function NotFound() {

  return (
    <>
        <Template>
            <div className="notFound">
                <div className="imageContainer">
                    <img src={image404} alt="Страница с ошибкой 404" />
                </div>
                <div className="textContainer"> 
                    <h2>Ой, а такой страницы нет!</h2>
                    <p>Вы можете вернуться на <a href='/choose-form'>страницу выбора форм</a></p>
                </div>
            </div>
        </Template>
    </>
  );
}

export default NotFound;
