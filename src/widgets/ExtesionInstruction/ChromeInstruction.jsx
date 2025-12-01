import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2chrome.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import step5 from "../../assets/images/step5.png";

import googleChromeIcon from "../../assets/images/GoogleChromeIcon.png";
import './ExtensionInstruction.css'


function ChromeInstruction() {

  return (
      <div className="instructions-container">
        <div className="instructions-header">
          <div className="instructions-logo">
            <img
              src={googleChromeIcon}
              className="logo-img"
              alt="Иконка Яндекс Браузер"
            />
          </div>
          <h1 className="instructions-h1">Как установить расширение?</h1>
        </div>
        <div className="instructions-body">
          <ul className="instructions-steps">
            <li className="instructions-step">
              <p className="step-text">1. Нажмите на скачанный файл, чтобы разархивировать его</p>
              <img className="step-img" src={step1}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">2. В своем браузере введите в строку поиска chrome://extensions/ и нажмите кнопку “Enter”</p>
              <img className="step-img" src={step2}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">3. Выберите Developer mode, чтобы перейти в режим разработки</p>
              <img className="step-img" src={step3}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">4. Нажмите на кнопку “Load unpacked” и выберите разархивированный файл</p>
              <img className="step-img" src={step4}/>
            </li>
            <li className="instructions-step">
              <p className="step-text">5. Расширение установлено!</p>
              <img className="step-img" src={step5}/>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default ChromeInstruction;
