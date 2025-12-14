import extensionsImage from "../../assets/images/extensionsImg.png";
import yandexBrowserIcon from "../../assets/images/YandexBrowserIcon.png";
import googleChromeIcon from "../../assets/images/GoogleChromeIcon.png";
import CustomButton from "@/shared/ui/CustomButton/CustomButton";
import packagedExtension from "../../assets/extension/yaformsaccessibilityext-1.0.0-chrome.zip"
import './ExtensionsWidget.css'
import { useNavigate } from 'react-router-dom';


function ExtensionsWidget() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  }

  return (
      <>
        <div className="extension-container">
          <div className="image-container">
            <img className="image" src={extensionsImage} alt="Девушка под пледом работает за компьютером" />
          </div>
          <div className="text-container">
            <h2 className="not-found-h">Скачайте расширение <br /> для анкеты</h2>
            <h3 className="not-found-h2">Выберите свой бразуер</h3>
            <div className="ext-buttons">
              <div className="button-area">
                <a href={packagedExtension} download={'YaFormsAccessibility.zip'}>
                  <CustomButton
                    className={"button_light"}
                    onClick={()=> handleClick('/extensions/ybrowser')}
                  >
                    <img
                      src={yandexBrowserIcon}
                      className="button-image"
                      alt=""
                    />
                    Яндекс Браузер
                  </CustomButton>
                </a>
              </div>
              <div className="button-area">
                <a href={packagedExtension} download={'YaFormsAccessibility.zip'}>
                  <CustomButton
                    className="button_light"
                    onClick={()=> handleClick('/extensions/gchrome')}
                  >
                    <img
                      src={googleChromeIcon}
                      className="button-image"
                      alt=""
                    />
                    Google Chrome
                  </CustomButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default ExtensionsWidget;
