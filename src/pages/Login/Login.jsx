import React, { useEffect, useState } from "react";
import CustomButton from "@/shared/ui/CustomButton/CustomButton";
import { api } from "@/shared/api";
import Loader from "@/shared/ui/Loader/Loader.jsx";
import ImageTop from "../../assets/images/img-top.svg";
import ImageBottom from "../../assets/images/img-bottom.svg";
import eyeImg from "../../assets/images/eye-black.svg";
import eyeXImg from "../../assets/images/eye-crossed.svg";

import "./Login.css";
import CustomCheckbox from "@/shared/ui/CustomCheckbox/CustomCheckbox";

function Login({ onLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const [ formValidityMsg, setFormValidityMsg ] = useState({
    username: "",
    password: ""
  })
  const [ isChecked, setIsChecked ] = useState(false)
  const [ isPassVisible, setIsPassVisible ] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (!value) {
      switch (name) {
        case 'username':
          setFormValidityMsg((prevState) => ({
            ...prevState,
            [name]: 'Введите имя пользователя',
          }))
          break;
        case 'password':
          //setError('Введите Пароль!');
          setFormValidityMsg((prevState) => ({
            ...prevState,
            [name]: 'Введите пароль',
          }))
          break;
        default:
          setError('Заполните все поля!')
      }
    } else if (!e.target.validity.valid) {
      switch (name) {
        case 'username':
          setFormValidityMsg((prevState) => ({
            ...prevState,
            [name]: 'Имя пользователя заполнено неверно',
          }))
          break;
        case 'password':
          setFormValidityMsg((prevState) => ({
            ...prevState,
            [name]: 'Пароль заполнен неверно',
          }))
          break;
        default:
          setError('Заполните все поля')
      }      
    } else {
      setError('')
      setFormValidityMsg((prevState) => ({
        ...prevState,
        [name]: '',
      }))
    }
  };

  if (isLoading) return <Loader />;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    api
      .loginUser(formState)
      .then((res) => {
        if (res && res.data.access_token) {
          onLogin(res.data.access_token);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.detail);
        if (err.status == "404") {
          setError('Не удалось отправить данные!');
        } else if (err.status == "401") {
          setError('Неправильное имя пользователя или пароль')
        } else {
          setError('Что-то пошло не так')
        }
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  if (isLoading) return <Loader />;

  return (
    <>
      <img src={ImageTop} className="img-top" alt="Логотип сердце в руках" />
      <div className="login-container">
        <h2 className="login-header">Вход в личный кабинет</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Имя пользователя
            <input 
            className={error ? "form-input form-input-invalid" : "form-input"} 
            placeholder='Логин или Email' 
            type="text" 
            name="username" 
            id="username" 
            value={formState.username ? formState.username : ''} 
            onChange={handleChange} 
            required={true} />
            <p className="error">{formValidityMsg.username}</p>
          </label>
          <label className="form-label">
            Пароль
            <input 
            className={error ? "form-input form-input-invalid" : "form-input"} 
            placeholder='Пароль' 
            type={isPassVisible ? "text" : "password"} 
            name="password" 
            id="password"
            value={formState.password ? formState.password : ''} 
            onChange={handleChange} 
            required={true} />
            <button
            className="showpass-btn" 
            type="button" 
            onClick={() => {setIsPassVisible(!isPassVisible)}}>
              <img 
              src={isPassVisible ? eyeXImg : eyeImg }
              alt="Иконка глаза" />
            </button>
            <p className="error">{formValidityMsg.password}</p>
          </label>
          <p className="error">{error}</p>
          <div className="form-bot">
            <CustomCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
            <CustomButton className="button_light" type="submit" disabled={formValidityMsg.username || formValidityMsg.password || error}>Войти</CustomButton>
          </div>
        </form>        
      </div>
      <img
        src={ImageBottom}
        className="img-bottom"
        alt="Логотип коробка в руках"
      />
    </>
  );
}

export default Login;