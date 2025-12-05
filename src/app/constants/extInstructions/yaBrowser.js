import yandexBrowserLogoImg from "../../../assets/images/YandexBrowserIcon.png";

import step1 from "../../../assets/images/step1.png";
import step2 from "../../../assets/images/step2.png";
import step3 from "../../../assets/images/step3.png";
import step4 from "../../../assets/images/step4.png";
import step5 from "../../../assets/images/step5.png";

export const yandexBrowserInstructions = {
    header: {
        logo: {
            img: yandexBrowserLogoImg,
            alt: 'Иконка Яндекс Браузера'
        },
        title: 'Как установить расширение?'
    },
    steps: [
        {
            text: '1. Нажмите на скачанный файл, чтобы разархивировать его.',
            img: {
                src: step1,
                alt: 'Картинка заархивированного приложения.'
            }
        },
        {
            text: '2. В своем браузере введите в строку поиска browser://extensions/ и нажмите кнопку “Enter”.',
            img: {
                src: step2,
                alt: 'Картинка, на которой поле поиска в браузере заполнено browser://extensions/ и, рядом, кнопка Enter.'
            }
        },
        {
            text: '3. Выберите "Режим разработчика" ("Developer mode"), чтобы перейти в режим разработки',
            img: {
                src: step3,
                alt: 'Картинка страницы browser://extensions/.В правом верхнем углу переключатель Developer Mode включен и обведен. Появились новые кнопки.'
            }
        },
        {
            text: '4. Нажмите на кнопку "Загрузить распакованное расширение" (“Load unpacked”) и выберите разархивированный файл.',
            img: {
                src: step4,
                alt: 'Картинка страницы browser://extensions/.В левом верхнем углу кнопка Load Unpacked обведена.'
            }
        },
        {
            text: '5. Расширение установлено!',
            img: {
                src: step5,
                alt: 'Картинка на которой показан попап расширения.'
            }
        },
    ]
}