import React from "react";
import Primary from "@/widgets/Primary/Primary.jsx";
import Template from "@/widgets/Template/Template.jsx";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFormById } from "@/shared/api/index.js";
import CustomButton from "../../components/Custombutton/CustomButton.jsx";
import logo from "../../assets/images/logo-invatur.svg";
import ImageTop from "../../assets/images/img-top.svg";
import ImageBottom from "../../assets/images/img-bottom.svg";
import ImagEyeWhite from "../../assets/images/eye-white.svg";
import ConfirmCheckbox from "../../components/ConfirmCheckbox/ConfirmCheckbox.jsx";
import "./Landing.css";

function Landing() {
  const location = useLocation();
  const [form, setForm] = useState(null);

  useEffect(() => {
    getFormById(location.pathname.split("/")[2])
      .then((form) => setForm(form))
      .catch((err) => console.log(err));
  }, []);

  const [isChecked, setIsChecked] = React.useState(false);

  function handleClick(event) {
    if (!isChecked) {
      event.preventDefault(); // блокируем переход по ссылке
    }
  }

  return !form ? (
    <div className="form-not-found">
      <h1>Формы не существует</h1>
    </div>
  ) : (
    <Template>
        <Primary form={form} />
      </Template>
  );
}

export default Landing;
