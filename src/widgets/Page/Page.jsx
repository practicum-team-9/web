import logo from "../../assets/images/logo-invatur.svg";
import "./Page.css";

function Page(props) {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="Логотип организации инватур" />
      </header>
      <main className="main">{props.children}</main>
    </>
  );
}

export default Page;
