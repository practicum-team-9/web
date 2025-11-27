import extensionsImage from "../../assets/images/extensionsImg.png";
import yandexBrowserIcon from "../../assets/images/YandexBrowserIcon.png";
import googleChromeIcon from "../../assets/images/GoogleChromeIcon.png";
import CustomButton from "@/shared/ui/CustomButton/CustomButton";
import './ExtensionsWidget.css'
import { useNavigate } from 'react-router-dom';


function ExtensionsWidget() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    console.log('click')
    // event.preventDefault(); // Prevent default anchor behavior
    // navigate('/choose-form'); // Navigate to the desired route
  }

  return (
      <>
        <div className="not-found">
          <div className="image-container">
            <img className="image" src={extensionsImage} alt="Девушка под пледом работает за компьютером" />
          </div>
          <div className="text-container">
            <h2 className="not-found-h">Скачайте расширение <br /> для анкеты</h2>
            <h3 className="not-found-h2">Выберите свой бразуер</h3>
            <div className="buttons">
              <div className="button-area">
                <CustomButton
                  className={"button_light"}
                  label="стандартная версия опроса"
                  onClick={handleClick}
                >
                  <img
                    src={yandexBrowserIcon}
                    className="button-image"
                    alt="Иконка Яндекс Бразуер"
                  />
                  Яндекс Браузер
                </CustomButton>
              </div>
              <div className="button-area">
                <CustomButton
                  className="button_light"
                  onClick={handleClick}
                >
                  <img
                    src={googleChromeIcon}
                    className="button-image"
                    alt="Иконка Google Chrome"
                  />
                  Google Chrome
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default ExtensionsWidget;
