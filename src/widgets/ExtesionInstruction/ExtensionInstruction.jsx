import extensionsImage from "../../assets/images/extensionsImg.png";
// import yandexBrowserIcon from "../../assets/images/YandexBrowserIcon.png";
import googleChromeIcon from "../../assets/images/GoogleChromeIcon.png";
import './ExtensionInstruction.css'
// import { useNavigate } from 'react-router-dom';


function ExtensionInstruction() {

  return (
      <div className="instructions-container">
        <div className="instructions-header">
          <img
            src={googleChromeIcon}
            className="button-image"
            alt="Иконка Google Chrome"
          />
          <h2>Как установить расширение?</h2>
        </div>
        <div className="instructions-body">
          <ul className="instructions-steps">
            <li className="instructions-step">
              <p className="step-text">1. Нажмите на скачанный файл, чтобы разархивировать его</p>
              <img className="step-img" src={extensionsImage}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">2. В своем браузере введите в строку поиска browser://extensions/ и нажмите кнопку “Enter”</p>
              <img className="step-img" src={extensionsImage}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">3. Выберите Developer mode, чтобы перейти в режим разработки</p>
              <img className="step-img" src={extensionsImage}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">4. Нажмите на кнопку “Load unpacked” и выберите разархивированный файл</p>
              <img className="step-img" src={extensionsImage}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">5. Расширение установлено!</p>
              <img className="step-img" src={extensionsImage}/>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default ExtensionInstruction;
