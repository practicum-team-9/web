import image404 from "../../assets/images/404.png";
import ImageBottom from "../../assets/images/img-bottom.svg";
import './NotFoundWidget.css'
import { useNavigate } from 'react-router-dom';


function NotFoundWidget() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate('/choose-form'); // Navigate to the desired route
  }

  return (
      <>
        <div className="not-found">
          <div className="image-container">
            <img className="image" src={image404} alt="Страница с ошибкой 404" />
          </div>
          <div className="text-container">
            <h2 className="not-found-h">Ошибка!</h2>
            <div>
              <p className="not-found-p">
                К сожалению такой страницы не существует.{" "}
              </p>
              <p className="not-found-p">
                Вы можете вернуться на{" "}
                <a className="not-found-a" href="/choose-form" onClick={handleClick}>
                  страницу выбора форм
                </a>
              </p>
            </div>
          </div>
        </div>
        <img
            src={ImageBottom}
            className="img-bottom"
        />
      </>
  );
}

export default NotFoundWidget;
