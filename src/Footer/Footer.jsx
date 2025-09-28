import React from "react";
import "./Footer.css"

function Footer() { return (
    <main className="footer">
        <button
            className="footer__button"
            onClick={() => {
                alert('Ссылка на страницу с формой или на админку');
            }}>Добавить форму</button>
    </main>
)
}

export default Footer;
