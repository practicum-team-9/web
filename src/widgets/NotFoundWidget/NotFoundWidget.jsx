import image404 from "../../assets/images/404.png";
import ImageBottom from "../../assets/images/img-bottom.svg";
import './NotFoundWidget.css'

function NotFoundWidget() {
  return (
      <>
        <div className="not-found">
          <div className="image-container">
            <img src={image404} alt="Страница с ошибкой 404" />
          </div>
          <div className="text-container">
            <h2 className="not-found-h">Ошибка!</h2>
            <p className="not-found-p">
              К сожалению такой страницы не существует.{" "}
            </p>
            <p className="not-found-p">
              Вы можете вернуться на{" "}
              <a className="not-found-a" href="/choose-form">
                страницу выбора форм
              </a>
            </p>
          </div>
        </div>
        <img
            src={ImageBottom}
            className="img-bottom"
            alt="Логотип коробка в руках"
        />
      </>
  );
}

export default NotFoundWidget;
