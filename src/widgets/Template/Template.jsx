import React from "react";
import logo from "../../assets/images/logo-invatur.svg";
import "./Template.css";

function Template(props) {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="Логотип организации инватур" />
      </header>
      <main className="main">{props.children}</main>
    </>
  );
}

export default Template;
